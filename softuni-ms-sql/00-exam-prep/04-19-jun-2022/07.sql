SELECT TOP(5)
	o.[Name] AS [Owner],
	COUNT(a.[Name]) AS CountOfAnimals
FROM Owners AS o
JOIN Animals AS a ON a.OwnerId = o.Id
GROUP BY o.[Name]
ORDER BY COUNT(a.[Name]) DESC;