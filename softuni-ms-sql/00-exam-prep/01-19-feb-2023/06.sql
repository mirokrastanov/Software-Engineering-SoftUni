SELECT
	b.Id AS Id,
	b.[Name] AS [Name], 
	b.YearPublished AS YearPublished, 
	c.[Name] AS [CategoryName]
FROM Boardgames AS b
JOIN Categories AS c ON b.CategoryId = c.Id
WHERE c.[Name] IN ('Wargames', 'Strategy Games')
ORDER BY YearPublished DESC;