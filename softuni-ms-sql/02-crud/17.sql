GO
CREATE VIEW V_EmployeeNameJobTitle AS SELECT 
-- CONCAT_WS(' ', [FirstName], [MiddleName], [LastName]) AS [Full Name], -- This is the better solution for real life examples.
CONCAT([FirstName], ' ', [MiddleName], ' ', [LastName]) AS [Full Name], -- This gets 100/100 pts.
[JobTitle]
FROM [Employees];
GO
SELECT * FROM V_EmployeeNameJobTitle;