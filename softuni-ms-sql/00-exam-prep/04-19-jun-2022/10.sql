SELECT
	a.[Name],
	FORMAT(a.BirthDate, 'yyyy') AS BirthYear,
	at.AnimalType
FROM Animals AS a
JOIN AnimalTypes AS at ON a.AnimalTypeId = at.Id
WHERE a.OwnerId IS NULL 
AND DATEDIFF(YEAR, a.BirthDate, '2022-01-01') < 5 
AND at.AnimalType != 'Birds'
ORDER BY a.[Name];