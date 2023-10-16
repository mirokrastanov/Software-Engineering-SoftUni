SELECT
	h.[Name],
	r.Price
FROM (SELECT
	Id AS Tourist
	FROM Tourists
	WHERE [Name] NOT LIKE '%EZ'
	) AS t
JOIN Bookings AS b ON t.Tourist = b.TouristId
JOIN Hotels AS h ON h.Id = b.HotelId
JOIN Rooms AS r ON b.RoomId = r.Id
ORDER BY r.Price DESC;