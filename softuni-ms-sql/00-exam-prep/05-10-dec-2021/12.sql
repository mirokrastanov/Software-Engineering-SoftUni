CREATE PROC usp_SearchByAirportName 
(@airportname VARCHAR(70))
AS
BEGIN
	SELECT
		ai.AirportName,
		p.FullName,
		CASE
			WHEN fd.TicketPrice <= 400 THEN 'Low'
			WHEN fd.TicketPrice BETWEEN 401 AND 1500 THEN 'Medium'
			WHEN fd.TicketPrice >= 1501 THEN 'High'
		END AS LevelOfTicketPrice,
		ac.Manufacturer,
		ac.Condition,
		[at].TypeName
	FROM Airports AS ai
	JOIN FlightDestinations AS fd ON fd.AirportId = ai.Id
	JOIN Passengers AS p ON fd.PassengerId = p.Id
	JOIN Aircraft AS ac ON ac.Id = fd.AircraftId
	JOIN AircraftTypes AS [at] ON [at].Id = ac.TypeId
	WHERE ai.AirportName = @airportname
	ORDER BY ac.Manufacturer, p.FullName
END;
