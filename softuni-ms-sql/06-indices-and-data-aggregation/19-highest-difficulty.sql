USE [SoftUni];

SELECT TOP(10)
	e.[FirstName], 
	e.[LastName], 
	a.[DepartmentID]
FROM [Employees] AS e
JOIN (
	SELECT
		e2.[DepartmentID], 
		AVG([Salary]) AS [AVG]
	FROM [Employees] AS e2
	GROUP BY e2.[DepartmentID]
) AS a ON e.[DepartmentID] = a.[DepartmentID]
WHERE [Salary] > [AVG];