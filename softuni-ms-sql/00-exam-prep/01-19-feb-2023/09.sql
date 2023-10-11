SELECT
	Fullname,
	Email,
	Rating
FROM (SELECT
	DENSE_RANK() OVER (
		PARTITION BY CONCAT_WS(' ', c.FirstName, c.LastName) 
		ORDER BY Rating DESC) AS #,
	CONCAT_WS(' ', c.FirstName, c.LastName) AS FullName,
	c.Email AS Email,
	b.Rating AS Rating
FROM Creators AS c
JOIN CreatorsBoardgames AS cb ON c.Id = cb.CreatorId
JOIN Boardgames AS b ON cb.BoardgameId = b.Id
WHERE Email LIKE '%.com') AS dt
WHERE # = 1
ORDER BY FullName;