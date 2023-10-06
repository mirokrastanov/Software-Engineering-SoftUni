USE [SoftUni];

SELECT * INTO [E06_EmployeesOver30000]
FROM [Employees]
WHERE [Salary] > 30000;

DELETE FROM [E06_EmployeesOver30000]
WHERE [ManagerID] = 42;

UPDATE [E06_EmployeesOver30000]
SET [Salary] += 5000
WHERE [DepartmentID] = 1;

SELECT [DepartmentID], AVG([Salary]) AS [AverageSalary]
FROM [E06_EmployeesOver30000]
GROUP BY [DepartmentID];