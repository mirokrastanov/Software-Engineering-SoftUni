SELECT
	c.Id,
	c.[Name] AS Client,
	CONCAT_WS(', ', CONCAT(a.StreetName, ' ', a.StreetNumber), a.City, a.PostCode, co.[Name]) AS [Address]
FROM Clients AS c
FULL JOIN ProductsClients AS pc ON c.Id = pc.ClientId
JOIN Addresses AS a ON c.AddressId = a.Id
JOIN Countries AS co ON co.Id = a.CountryId
WHERE pc.ClientId IS NULL
ORDER BY c.[Name];