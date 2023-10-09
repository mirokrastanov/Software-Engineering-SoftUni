USE [Bank];
GO

CREATE OR ALTER PROC usp_CalculateFutureValueForAccount
(@AccountId INT, @intRate FLOAT)
AS
BEGIN
	SELECT 
		[sum].[Id] AS [Account Id],
		[ah].[FirstName] AS [First Name],
		[ah].[LastName] AS [Last Name],
		[sum].[SUM] AS [Current Balance],
		dbo.ufn_CalculateFutureValue([sum].[SUM], @intRate, 5) AS [Balance in 5 years]
	FROM (SELECT [Id], [AccountHolderId], [Balance] AS [SUM]
	FROM [Accounts]) AS [sum]
	JOIN [AccountHolders] AS [ah] ON [sum].[AccountHolderId] = [ah].[Id]
	WHERE [sum].[Id] = @AccountId
END

GO
EXEC usp_CalculateFutureValueForAccount 1, 0.1;
GO