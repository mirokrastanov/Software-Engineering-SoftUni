SELECT
	v.[Name],
	v.PhoneNumber,
	TRIM(SUBSTRING(TRIM(v.[Address]), 8, LEN(TRIM(v.[Address])) - 7)) AS [Address]
FROM Volunteers AS v
JOIN VolunteersDepartments AS vd ON v.DepartmentId = vd.Id
WHERE vd.DepartmentName = 'Education program assistant' AND LEFT(TRIM(v.[Address]), 5) = 'Sofia'
ORDER BY v.[Name];