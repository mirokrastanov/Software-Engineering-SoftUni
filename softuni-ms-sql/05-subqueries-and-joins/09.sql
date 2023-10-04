SELECT
	e.[EmployeeID],
	e.[FirstName],
	e.[ManagerID],
	m.[FirstName] AS [ManagerName]
FROM [Employees] AS e
JOIN [Employees] AS m ON e.[ManagerID] = m.[EmployeeID] AND m.[EmployeeID] IN (3, 7)
ORDER BY e.[EmployeeID];
