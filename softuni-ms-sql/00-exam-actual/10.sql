SELECT
	h.[Name] AS HotelName,
	SUM(r.Price * ABS(DATEDIFF(DAY, b.ArrivalDate, b.DepartureDate))) AS HotelRevenue
FROM Bookings AS b
JOIN Hotels AS h ON b.HotelId = h.Id
JOIN Rooms AS r ON b.RoomId = r.Id
GROUP BY h.[Name]
ORDER BY HotelRevenue DESC;
