USE [Bank];
GO

CREATE OR ALTER PROC usp_DepositMoney
(@AccountId INT, @MoneyAmount DECIMAL(20,4))
AS
BEGIN
	IF (@MoneyAmount > 0)
	BEGIN
		UPDATE Accounts
		SET Balance += @MoneyAmount
		WHERE Accounts.Id = @AccountId
	END
END;
GO

EXEC usp_DepositMoney 1, 10;
GO

SELECT * FROM Accounts;