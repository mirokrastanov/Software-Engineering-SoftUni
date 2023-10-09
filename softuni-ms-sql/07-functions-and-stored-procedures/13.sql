USE [Diablo];
GO

CREATE OR ALTER FUNCTION ufn_CashInUsersGames (@gameName VARCHAR(MAX))
RETURNS @result TABLE (
	[SumCash] DECIMAL(20, 2)
)
AS
BEGIN
	INSERT INTO @result
		SELECT SUM(dt.[SumCash]) AS [SumCash]
		FROM ( SELECT [SumCash] 
			FROM
			(	SELECT
					ROW_NUMBER() OVER (ORDER BY [Cash] DESC) AS [Row],
					[Cash] AS [SumCash]
 				FROM (
					SELECT [Id]
					FROM [Games]
					WHERE [Name] = @gameName
				) AS g
				LEFT JOIN [UsersGames] AS ug ON g.[Id] = ug.[GameId]
			) AS h
			WHERE h.[Row] % 2 = 1
		) AS dt
	RETURN
END;

GO
SELECT * FROM dbo.ufn_CashInUsersGames('Love in a mist');
GO