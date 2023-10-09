USE [SoftUni];
GO

CREATE OR ALTER PROC [usp_GetTownsStartingWith]
	(@str NVARCHAR(MAX)) 
AS
	SELECT [Name]
	FROM [Towns]
	WHERE LOWER([Name]) LIKE @str + '%';

EXEC [usp_GetTownsStartingWith] 'b';
GO