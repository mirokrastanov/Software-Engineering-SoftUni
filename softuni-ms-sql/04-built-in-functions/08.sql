GO
CREATE VIEW [V_EmployeesHiredAfter2000] AS
SELECT
	[FirstName],
	[LastName]
FROM [Employees]
WHERE DATEPART(YEAR, [HireDate]) > 2000;

-- not part of submission, just to visualize the result
GO
SELECT * FROM [V_EmployeesHiredAfter2000]; 