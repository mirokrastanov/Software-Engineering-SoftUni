CREATE PROC usp_SearchByCountry(@country VARCHAR(MAX))
AS
BEGIN
	SELECT
		t.[Name],
		t.PhoneNumber,
		t.Email,
		COUNT(*) AS CountOfBookings
	FROM Tourists AS t
	JOIN Countries AS c ON t.CountryId = c.Id
	JOIN Bookings AS b ON b.TouristId = t.Id
	WHERE c.[Name] = @country
	GROUP BY t.[Name], t.PhoneNumber, t.Email
	ORDER BY t.[Name], COUNT(*) DESC
END;