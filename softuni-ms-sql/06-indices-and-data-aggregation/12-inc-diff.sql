USE [Gringotts];

SELECT
	SUM(b.[Difference]) AS [SumDifference]
FROM 
	(SELECT (a.[Host Wizard Deposit] - a.[Guest Wizard Deposit]) AS [Difference]
	FROM 
		(SELECT
			ROW_NUMBER() OVER (ORDER BY w1.[Id]) AS [Row#],
			CONCAT_WS(' ', w1.[FirstName], w1.[LastName]) AS [Host Wizard], 
			w1.[DepositAmount] AS [Host Wizard Deposit],
			CONCAT_WS(' ', w2.[FirstName], w2.[LastName]) AS [Guest Wizard], 
			w2.[DepositAmount] AS [Guest Wizard Deposit]
		FROM [WizzardDeposits] AS w1
		JOIN [WizzardDeposits] AS w2 ON w1.[Id] + 1 = w2.[Id]
	) AS a
) AS b;