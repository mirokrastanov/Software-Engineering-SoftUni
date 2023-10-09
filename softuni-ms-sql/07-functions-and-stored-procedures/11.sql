USE [Bank];
GO

CREATE OR ALTER FUNCTION ufn_CalculateFutureValue
(@sum DECIMAL(20,4), @yearlyRate FLOAT, @years INT)
RETURNS DECIMAL(20, 4)
AS
BEGIN
	RETURN @sum * (POWER((1 + @yearlyRate), @years))
END;

GO
SELECT dbo.ufn_CalculateFutureValue(1000, 0.1, 5);
GO