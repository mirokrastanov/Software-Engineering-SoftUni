SELECT
	[Username],
	REPLACE(SUBSTRING(
		[Email], CHARINDEX('@', [Email]), LEN([Email]) - CHARINDEX('@', [Email]) + 1
	), '@', '') AS [Email Provider]
FROM [Users]
ORDER BY [Email Provider], [Username];