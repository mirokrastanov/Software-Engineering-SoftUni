CREATE FUNCTION udf_FlightDestinationsByEmail(@email VARCHAR(MAX))
RETURNS INT
AS 
BEGIN
	RETURN (
		SELECT ISNULL(
			(SELECT
				COUNT(*)
			FROM Passengers AS p 
			LEFT JOIN FlightDestinations AS fd ON fd.PassengerId = p.Id
			WHERE p.Email = @email AND fd.Id IS NOT NULL
			GROUP BY p.Email) 
		, 0)
	)
END;