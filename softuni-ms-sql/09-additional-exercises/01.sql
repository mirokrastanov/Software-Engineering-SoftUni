USE [Diablo];
GO

SELECT
	[Email Provider],
	COUNT([Email Provider]) AS [Number of Users]
FROM (SELECT
	SUBSTRING(
		Email, 
		CHARINDEX('@', Email) + 1,
		LEN(Email) -  CHARINDEX('@', Email)
	) AS [Email Provider]
FROM Users) AS [dt]
GROUP BY [Email Provider]
ORDER BY [Number of Users] DESC, [Email Provider];