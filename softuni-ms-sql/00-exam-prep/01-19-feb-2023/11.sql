CREATE FUNCTION udf_CreatorWithBoardgames 
(@name VARCHAR(MAX))
RETURNS INT AS
BEGIN
	RETURN (SELECT
		COUNT(*) AS [Count]
	FROM Creators AS c
	JOIN CreatorsBoardgames AS cb ON c.Id = cb.CreatorId
	JOIN Boardgames AS b ON cb.BoardgameId = b.Id
	WHERE c.FirstName = @name)
END;