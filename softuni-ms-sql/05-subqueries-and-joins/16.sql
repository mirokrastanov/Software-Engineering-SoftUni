SELECT
	COUNT(*) AS [Count]
FROM (
	SELECT
		c.[CountryCode],
		mc.[MountainId]
	FROM [Countries] AS c
	LEFT JOIN [MountainsCountries] AS mc
		ON mc.CountryCode = c.[CountryCode]
	) AS r
WHERE r.[MountainId] IS NULL;