SELECT 
	cl.[Name] AS Client,
	FLOOR(AVG(p.Price)) AS [Average Price]
FROM Clients AS cl
FULL JOIN ProductsClients AS pc ON cl.Id = pc.ClientId
JOIN Products AS p ON pc.ProductId = p.Id
JOIN Vendors AS v ON p.VendorId = v.Id
WHERE pc.ProductId IS NOT NULL AND v.NumberVAT LIKE '%FR%'
GROUP BY cl.[Name]
ORDER BY AVG(p.Price), cl.[Name] DESC;