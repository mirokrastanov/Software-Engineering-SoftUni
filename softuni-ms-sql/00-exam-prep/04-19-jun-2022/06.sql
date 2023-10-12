SELECT
	a.[Name],
	at.AnimalType,
	CONCAT_WS('',
		FORMAT(a.BirthDate, 'dd'), '.',
		FORMAT(a.BirthDate, 'MM'), '.',
		FORMAT(a.BirthDate, 'yyyy')
	) AS BirthDate
FROM Animals AS a
JOIN AnimalTypes AS at ON a.AnimalTypeId = at.Id
ORDER BY a.[Name];