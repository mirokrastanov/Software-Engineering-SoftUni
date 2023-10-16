CREATE FUNCTION udf_RoomsWithTourists(@name VARCHAR(MAX))
RETURNS INT
AS
BEGIN
	RETURN (
		SELECT
			SUM(b.AdultsCount + b.ChildrenCount) AS [Count]
		FROM Rooms AS r
		JOIN Bookings AS b ON r.Id = b.RoomId
		JOIN Tourists AS t ON t.Id = b.TouristId
		WHERE r.[Type] = @name
	)
END;