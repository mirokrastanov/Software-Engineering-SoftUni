SELECT TOP(3)
	e.[EmployeeID],
	e.[FirstName]
FROM [Employees] AS e
FULL JOIN [EmployeesProjects] AS l ON e.[EmployeeID] = l.[EmployeeID]
WHERE l.ProjectID IS NULL
ORDER BY e.[EmployeeID];