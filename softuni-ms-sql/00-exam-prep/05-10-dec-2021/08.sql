SELECT
	a.Id AS AircraftId,
	a.Manufacturer,
	a.FlightHours,
	COUNT(*) AS FlightDestionationsCount,
	ROUND(AVG(fd.TicketPrice), 2) AS AvgPrice
FROM Aircraft AS a
Join FlightDestinations AS fd ON fd.AircraftId = a.Id
GROUP BY a.Id, a.Manufacturer, a.FlightHours
HAVING COUNT(*) >= 2
ORDER BY COUNT(*) DESC, a.Id;
