SELECT TOP(5)
	o.[Country], o.[Highest Peak Name], o.[Highest Peak Elevation], o.[Mountain]
FROM (
	SELECT
		c.[CountryName] AS [Country],
		CASE
			WHEN p.[PeakName] IS NULL THEN '(no highest peak)'
			ELSE p.[PeakName]
		END AS [Highest Peak Name],
		CASE
			WHEN p.[Elevation] IS NULL THEN 0
			ELSE p.[Elevation]
 		END AS [Highest Peak Elevation],
		CASE
			WHEN m.[MountainRange] IS NULL THEN '(no mountain)'
			ELSE m.[MountainRange]
		END AS [Mountain],
		DENSE_RANK() OVER (PARTITION BY c.[CountryName] ORDER BY p.[Elevation] DESC) AS [Rank]
	FROM [Countries] AS c
	LEFT JOIN [MountainsCountries] AS mc ON c.[CountryCode] = mc.[CountryCode]
	FULL JOIN [Peaks] AS p ON mc.[MountainId] = p.[MountainId]
	FULL JOIN [Mountains] AS m ON mc.[MountainId] = m.[Id]
	WHERE c.[CountryName] IS NOT NULL
	) AS o
WHERE o.[Rank] = 1
ORDER BY o.[Country], o.[Highest Peak Name];