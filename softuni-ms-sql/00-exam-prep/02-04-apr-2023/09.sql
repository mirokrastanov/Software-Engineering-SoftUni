SELECT 
	cl.[Name] AS Client,
	MAX(p.Price) AS Price,
	cl.NumberVAT AS [VAT Number]
FROM Clients AS cl
JOIN ProductsClients AS pc ON cl.Id = pc.ClientId
JOIN Products AS p ON pc.ProductId = p.Id
WHERE cl.[Name] NOT LIKE '%KG'
GROUP BY cl.[Name], cl.NumberVAT
ORDER BY MAX(p.Price) DESC;
