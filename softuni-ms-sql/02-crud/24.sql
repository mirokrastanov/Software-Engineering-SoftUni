SELECT [CountryName], [CountryCode],
CASE
	WHEN [CurrencyCode] = 'EUR' THEN 'Euro'
	WHEN [CurrencyCode] != 'EUR' THEN 'Not Euro'
	WHEN [CurrencyCode] IS NULL THEN 'Not Euro'
--	ELSE 'Not Euro' -- A better option
END AS [Currency]
FROM [Countries]
ORDER BY [CountryName]