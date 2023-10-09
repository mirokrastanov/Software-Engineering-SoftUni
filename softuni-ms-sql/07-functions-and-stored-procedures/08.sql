USE [SoftUni];
GO

CREATE OR ALTER PROC usp_DeleteEmployeesFromDepartment 
(@departmentId INT)
AS
BEGIN
	DECLARE @toBeDel TABLE([ID] INT)

	INSERT INTO @toBeDel([ID])
	SELECT [EmployeeID]
	FROM [Employees]
	WHERE [DepartmentID] = @departmentId

	ALTER TABLE [Departments]
	ALTER COLUMN [ManagerID] INT

	UPDATE [Departments]
	SET [ManagerID] = NULL
	WHERE [ManagerID] IN (SELECT * FROM @toBeDel)

	UPDATE [Employees]
	SET [ManagerID] = NULL
	WHERE [ManagerID] IN (SELECT * FROM @toBeDel)

	DELETE FROM [EmployeesProjects]
	WHERE [EmployeeID] IN (SELECT * FROM @toBeDel)

	DELETE FROM [Employees]
	WHERE [DepartmentID] = @departmentId

	DELETE FROM [Departments]
	WHERE [DepartmentID] = @departmentId

	SELECT COUNT(*) FROM [Employees]
	WHERE [DepartmentID] = @departmentId
END;

GO
-- EXEC usp_DeleteEmployeesFromDepartment;
GO