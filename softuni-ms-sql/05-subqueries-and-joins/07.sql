SELECT TOP(5)
	e.[EmployeeID],
	e.[FirstName],
	p.[Name] AS [ProjectName]
FROM [Employees] AS e
JOIN [EmployeesProjects] AS l ON e.[EmployeeID] = l.[EmployeeID]
JOIN [Projects] as p ON l.[ProjectID] = p.[ProjectID]
WHERE l.[ProjectID] IS NOT NULL AND p.[StartDate] > '2002-08-13' AND p.[EndDate] IS NULL
ORDER BY e.[EmployeeID];
