SELECT
	l.Province,
	l.Municipality,
	l.[Name] AS [Location],
	COUNT(s.[Name]) AS CountOfSites
FROM Locations AS l
JOIN Sites AS s ON s.LocationId = l.Id
WHERE Province = 'Sofia'
GROUP BY l.Province, l.[Name], l.Municipality
ORDER BY COUNT(s.[Name]) DESC, l.[Name];