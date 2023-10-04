SELECT TOP(5)
	c.[CountryName],
	r.[RiverName]
FROM [Countries] as c
LEFT JOIN [CountriesRivers] as cr
	ON c.[CountryCode] = cr.[CountryCode]
LEFT JOIN [Rivers] AS r
	ON r.[Id] = cr.[RiverId]
WHERE c.[ContinentCode] = 'AF'
ORDER BY c.[CountryName];