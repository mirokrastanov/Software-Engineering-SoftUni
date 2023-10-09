USE [SoftUni];
GO

CREATE OR ALTER PROC [usp_GetEmployeesSalaryAboveNumber]
	(@var DECIMAL(18, 4))
AS
	SELECT [FirstName], [LastName]
	FROM [Employees]
	WHERE [Salary] >= @var;

EXEC [usp_GetEmployeesSalaryAboveNumber] 60000;
GO
