CREATE PROC usp_SearchByCategory
(@category VARCHAR(MAX))
AS
BEGIN
	SELECT
		*
	FROM (SELECT
		b.[Name] AS [Name],
		b.YearPublished AS YearPublished,
		b.Rating AS Rating,
		ca.[Name] AS CategoryName,
		p.[Name] AS PublisherName,
		CONCAT_WS(' ', pr.PlayersMin, 'people') AS Minplayers,
		CONCAT_WS(' ', pr.PlayersMax, 'people') AS MaxPlayers
	FROM Categories AS ca
	JOIN Boardgames AS b ON ca.Id = b.CategoryId
	JOIN Publishers AS p ON b.PublisherId = p.Id
	JOIN PlayersRanges AS pr ON b.PlayersRangeId = pr.Id
	) AS dt
	WHERE CategoryName = @category
	ORDER BY PublisherName, YearPublished DESC
END;