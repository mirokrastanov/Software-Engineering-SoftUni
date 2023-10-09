USE [Bank];
GO

CREATE OR ALTER PROC usp_GetHoldersWithBalanceHigherThan(@num MONEY) -- Needs to be MONEY or pts go to 80/100. It's 100/100 now.
AS
BEGIN
	SELECT [FirstName] AS [First Name], [LastName] AS [Last Name] 
	FROM [AccountHolders] AS ah
	LEFT JOIN [Accounts] AS a ON ah.[Id] = a.[AccountHolderId]
	GROUP BY ah.[Id], ah.[FirstName], ah.[LastName]
	HAVING SUM(a.[Balance]) > @num
	ORDER BY [First Name], [Last Name]
END;

GO
EXEC usp_GetHoldersWithBalanceHigherThan 0.2;
GO