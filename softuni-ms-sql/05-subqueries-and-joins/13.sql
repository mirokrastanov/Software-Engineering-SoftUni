SELECT
	mc.[CountryCode],
	COUNT(m.[MountainRange]) AS [MountainRanges]
FROM [Mountains] AS m
JOIN [MountainsCountries] AS mc 
	ON m.[Id] = mc.[MountainId]
WHERE mc.[CountryCode] IN ('US', 'RU', 'BG')
GROUP BY mc.[CountryCode];