CREATE PROC usp_AnimalsWithOwnersOrNot(@AnimalName VARCHAR(MAX))
AS
BEGIN
	SELECT
		a.[Name],
		CASE
			WHEN a.OwnerId IS NULL THEN 'For adoption'
			ELSE o.[Name]
		END AS OwnersName
	FROM Animals AS a
	FULL JOIN Owners AS o ON a.OwnerId = o.Id
	WHERE a.[Name] = @AnimalName
END;


EXEC usp_AnimalsWithOwnersOrNot 'Pumpkinseed Sunfish';

EXEC usp_AnimalsWithOwnersOrNot 'Hippo';

EXEC usp_AnimalsWithOwnersOrNot 'Brown bear';
