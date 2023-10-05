SELECT 
	o.[ContinentCode], o.[CurrencyCode], o.[CurrencyUsage]
FROM (
	SELECT [ContinentCode], [CurrencyCode], COUNT([CurrencyCode]) AS [CurrencyUsage],
	DENSE_RANK() OVER (PARTITION BY [ContinentCode] ORDER BY COUNT([CurrencyCode]) DESC) AS [Rank]
	FROM [Countries]
	GROUP BY [ContinentCode], [CurrencyCode]
	HAVING COUNT([CurrencyCode]) > 1
	) AS o
WHERE o.[Rank] = 1
ORDER BY o.[ContinentCode];