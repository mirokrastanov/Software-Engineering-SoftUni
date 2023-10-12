CREATE PROC usp_AnnualRewardLottery(@TouristName VARCHAR(MAX))
AS
BEGIN
	DECLARE @count INT = (
		SELECT 
			COUNT(*)
		FROM Sites AS s
		JOIN SitesTourists AS st ON s.Id = st.SiteId
		JOIN Tourists AS t ON st.TouristId = t.Id
		WHERE t.[Name] = @TouristName
		GROUP BY t.[Name]);

	SELECT 
		t.[Name],
		CASE
			WHEN @count >= 100 THEN 'Gold badge'
			WHEN @count >= 50 THEN 'Silver badge'
			WHEN @count >= 25 THEN 'Bronze badge'
			ELSE NULL
		END AS Reward
	FROM Tourists AS t
	WHERE t.[Name] = @TouristName
END;

EXEC usp_AnnualRewardLottery 'Gerhild Lutgard';

EXEC usp_AnnualRewardLottery 'Teodor Petrov';

EXEC usp_AnnualRewardLottery 'Zac Walsh';

EXEC usp_AnnualRewardLottery 'Brus Brown';
