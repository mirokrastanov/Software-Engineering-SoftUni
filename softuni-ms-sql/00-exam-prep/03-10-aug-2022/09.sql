SELECT
	t.[Name],
	t.Age,
	t.PhoneNumber,
	t.Nationality,
	CASE
		WHEN bp.[Name] IS NULL THEN '(no bonus prize)'
		ELSE bp.[Name]
	END AS [Reward]
FROM Tourists AS t
FULL JOIN TouristsBonusPrizes AS tbp ON t.Id = tbp.TouristId
FULL JOIN BonusPrizes AS bp ON tbp.BonusPrizeId = bp.Id
WHERE t.[Name] IS NOT NULL
ORDER BY t.[Name];
