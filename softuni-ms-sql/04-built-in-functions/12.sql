USE [Geography]

SELECT
	[CountryName] AS [Country Name],
	[ISOCode] AS [ISO Code]
FROM [Countries]
WHERE LOWER([CountryName]) LIKE '%a%a%a' OR 
LOWER([CountryName]) LIKE '%a%a%a%' OR
LOWER([CountryName]) LIKE 'a%a%a%' OR
LOWER([CountryName]) LIKE 'a%a%a'
ORDER BY [ISOCode];


-- Updated solution = better
SELECT
	[CountryName] AS [Country Name],
	[ISOCode] AS [ISO Code]
FROM [Countries]
WHERE (LEN([CountryName]) - LEN(REPLACE(LOWER([CountryName]), 'a', ''))) >= 3
ORDER BY [ISOCode];