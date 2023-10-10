USE [Diablo];
GO

SELECT TOP(1) * FROM Users
SELECT TOP(1) * FROM UsersGames
SELECT TOP(1) * FROM Games
SELECT TOP(1) * FROM UserGameItems
SELECT TOP(1) * FROM Items

SELECT
	[Username],
	[Game],
	COUNT([Item]) AS [Items Count],
	SUM([Item Price]) AS [Items Price]
FROM (SELECT
	u.[Username] AS [Username],
	g.[Name] AS [Game],
	i.[Name] AS [Item],
	i.[Price] AS [Item Price]
FROM Users AS u
JOIN UsersGames AS ug ON u.Id = ug.UserId
JOIN Games AS g ON ug.GameId = g.Id
JOIN UserGameItems AS ugi ON g.Id = ugi.UserGameId
JOIN Items AS i ON ugi.ItemId = i.Id
) AS a
GROUP BY [Username], [Game]
HAVING COUNT([Item]) >= 10
ORDER BY COUNT([Item]) DESC, SUM([Item Price]) DESC, [Username];

