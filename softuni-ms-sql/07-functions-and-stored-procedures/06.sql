USE [SoftUni];
GO

CREATE OR ALTER PROC usp_EmployeesBySalaryLevel
(@level VARCHAR(MAX))
AS
BEGIN
	SELECT [FirstName], [LastName]
	FROM [Employees]
	WHERE dbo.ufn_GetSalaryLevel([Salary]) = @level
END;


EXEC usp_EmployeesBySalaryLevel 'low';
GO