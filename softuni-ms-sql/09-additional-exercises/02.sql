USE [Diablo];
GO

SELECT TOP(1) * FROM Games
SELECT TOP(1) * FROM GameTypes
SELECT TOP(1) * FROM UsersGames
SELECT TOP(1) * FROM Users
SELECT TOP(1) * FROM Characters

SELECT
	g.[Name] AS [Game],
	gt.[Name] AS [Game Type],
	u.[Username] AS [Username],
	ug.[Level] AS [Level],
	ug.[Cash] AS [Cash],
	c.[Name] AS [Character]
FROM Games AS g
JOIN GameTypes AS gt ON g.GameTypeId = gt.Id
JOIN UsersGames AS ug ON g.Id = ug.GameId
JOIN Users AS u ON ug.UserId = u.Id
JOIN Characters AS c ON ug.CharacterId = c.Id
ORDER BY [Level] DESC, [Username], [Game];
