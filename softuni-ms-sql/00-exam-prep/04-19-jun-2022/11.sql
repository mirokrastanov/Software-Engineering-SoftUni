CREATE FUNCTION udf_GetVolunteersCountFromADepartment 
(@VolunteersDepartment VARCHAR(MAX))
RETURNS INT AS
BEGIN
	RETURN (
		SELECT
			COUNT(*)
		FROM VolunteersDepartments AS vd
		JOIN Volunteers AS v ON v.DepartmentId = vd.Id
		WHERE vd.DepartmentName = @VolunteersDepartment
		GROUP BY vd.DepartmentName
	)
END;
