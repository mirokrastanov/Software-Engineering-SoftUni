USE [SoftUni];
GO

CREATE OR ALTER PROC usp_GetEmployeesFromTown
(@town VARCHAR(MAX))
AS
SELECT 
	e.[FirstName], 
	e.[LastName]
FROM [Employees] AS e
LEFT JOIN [Addresses] AS a ON e.[AddressID] = a.[AddressID]
LEFT JOIN [Towns] AS t ON a.[TownID] = t.[TownID]
WHERE LOWER(@town) = LOWER(t.[Name]);

EXEC usp_GetEmployeesFromTown 'Sofia';
GO