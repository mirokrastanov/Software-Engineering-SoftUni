SELECT TOP(5)
	[CountryName], [HighestPeakElevation], [LongestRiverLength]
FROM
	(SELECT
		c.[CountryName],
		r.[Length] AS [LongestRiverLength],
		p.Elevation AS [HighestPeakElevation],
		DENSE_RANK() OVER (PARTITION BY cr.[CountryCode] ORDER BY r.[Length] DESC) AS [Rank1],
		DENSE_RANK() OVER (PARTITION BY mc.[CountryCode] ORDER BY p.[Elevation] DESC) AS [Rank2]
	FROM [Rivers] AS r
	JOIN [CountriesRivers] AS cr ON r.[Id] = cr.[RiverId]
	JOIN [MountainsCountries] AS mc ON cr.[CountryCode] = mc.[CountryCode]
	JOIN [Peaks] AS p ON mc.[MountainId] = p.[MountainId]
	JOIN [Countries] AS c ON mc.[CountryCode] = c.[CountryCode]
	) AS [dt]
WHERE [Rank1] = 1 AND [Rank2] = 1
ORDER BY [HighestPeakElevation] DESC, [LongestRiverLength] DESC, [CountryName];