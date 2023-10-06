USE [SoftUni];

SELECT 
	[DepartmentID],
	[Salary] AS [ThirdHighestSalary]
FROM (SELECT *
	FROM (SELECT
		[DepartmentID],
		[Salary],
		DENSE_RANK() OVER (PARTITION BY [DepartmentID] ORDER BY [Salary] DESC) AS [Rank],
		ROW_NUMBER() OVER (PARTITION BY [DepartmentID] ORDER BY [Salary] DESC) AS [Row]
	FROM [Employees]) AS a
WHERE [Rank] = 3) AS b
GROUP BY [Salary], [DepartmentID]
ORDER BY [DepartmentID];
