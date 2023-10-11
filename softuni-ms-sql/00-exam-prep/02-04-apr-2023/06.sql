SELECT 
	p.Id,
	p.[Name],
	p.Price,
	ca.[Name] AS CategoryName
FROM Products AS p
JOIN Categories AS ca ON p.CategoryId = ca.Id
WHERE ca.[Name] IN ('ADR', 'Others')
ORDER BY Price DESC;