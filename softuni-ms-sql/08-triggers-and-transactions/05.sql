USE [Bank];
GO

CREATE OR ALTER PROC usp_TransferMoney
(@SenderId INT, @ReceiverId INT, @Amount DECIMAL(20, 4))
AS
BEGIN
	IF (@Amount > 0)
		BEGIN TRY
			BEGIN TRANSACTION
				EXEC usp_WithdrawMoney @SenderId, @Amount
				EXEC usp_DepositMoney @ReceiverId, @Amount
			COMMIT
		END TRY
		BEGIN CATCH
			ROLLBACK TRANSACTION
		END CATCH
END;
GO

EXEC usp_TransferMoney 5, 1, 5000;
GO

SELECT * FROM Accounts;
