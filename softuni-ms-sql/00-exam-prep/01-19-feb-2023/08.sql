SELECT TOP(5)
	b.[Name] AS [Name],
	b.Rating AS Rating,
	c.[Name] AS CategoryName
FROM Boardgames AS b
JOIN PlayersRanges AS pr ON b.PlayersRangeId = pr.Id
JOIN Categories AS c ON b.CategoryId = c.Id
WHERE (Rating > 7 AND CHARINDEX('a', LOWER(b.[Name])) != 0)
OR (Rating > 7.5 AND pr.PlayersMax = 5 AND pr.PlayersMin = 2)
ORDER BY b.[Name], b.Rating DESC;