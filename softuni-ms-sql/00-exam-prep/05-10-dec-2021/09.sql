SELECT
	p.FullName,
	COUNT(ac.Id) AS CountOfAircraft,
	SUM(fd.TicketPrice) AS TotalPayed
FROM Passengers AS p
JOIN FlightDestinations AS fd ON fd.PassengerId = p.Id
JOIN Aircraft AS ac ON fd.AircraftId = ac.Id
GROUP BY p.FullName
HAVING COUNT(ac.Id) > 1 AND SUBSTRING(p.FullName, 2, 1) = 'a'
ORDER BY p.FullName;
