SELECT
	c.Id AS Id,
	CONCAT_WS(' ', c.FirstName, c.LastName) AS CreatorName,
	c.Email AS Email
FROM Creators AS c
FULL JOIN CreatorsBoardgames AS cb ON c.Id = cb.CreatorId
WHERE CreatorId IS NULL
ORDER BY CONCAT_WS(' ', c.FirstName, c.LastName);