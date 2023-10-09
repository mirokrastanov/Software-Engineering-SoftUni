USE [Bank];
GO

CREATE OR ALTER PROC usp_GetHoldersFullname
AS
BEGIN
	SELECT
		CONCAT_WS(' ', [FirstName], [LastName]) AS [Full Name]
	FROM [AccountHolders]
END;

GO
EXEC usp_GetHoldersFullname;
GO
