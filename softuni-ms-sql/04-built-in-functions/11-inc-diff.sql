SELECT * FROM 
	(SELECT
		[EmployeeID],
		[FirstName],
		[LastName],
		[Salary],
		DENSE_RANK() OVER (
		PARTITION BY [Salary] ORDER BY [EmployeeID]
		) AS [Rank]
	FROM [Employees]
	) AS [Employees] -- The subquery needs to have an alias to work!
WHERE [Salary] BETWEEN 10000 AND 50000 AND [Rank] = 2
ORDER BY [Salary] DESC;

-- Alt solution
SELECT * FROM 
	(SELECT [EmployeeID], [FirstName], [LastName], [Salary],
	DENSE_RANK() OVER (PARTITION BY [Salary] ORDER BY [EmployeeID]) AS [Rank]
	FROM [Employees]
	WHERE [Salary] BETWEEN 10000 AND 50000) AS [Subquery]
WHERE [Subquery].[Rank] = 2
ORDER BY [Salary] DESC;