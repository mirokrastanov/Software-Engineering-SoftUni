CREATE PROC usp_SearchByCountry(@country NVARCHAR(MAX)) 
AS
BEGIN
	SELECT
		v.[Name] AS Vendor,
		v.NumberVAT AS VAT,
		CONCAT_WS(' ', a.StreetName, a.StreetNumber) AS [Street Info],
		CONCAT_WS(' ', a.City, a.PostCode) AS [City Info]
	FROM Vendors AS v
	JOIN Addresses AS a ON v.AddressId = a.Id
	JOIN Countries AS c ON a.CountryId = c.Id
	WHERE c.[Name] = @country
	ORDER BY v.[Name], a.City;
END;