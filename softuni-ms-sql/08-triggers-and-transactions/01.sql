USE [Bank];
GO

CREATE TABLE [Logs](
	[LogId] INT IDENTITY PRIMARY KEY,
	[AccountId] INT FOREIGN KEY REFERENCES [Accounts],
	[OldSum] MONEY,
	[NewSum] MONEY
);
GO

CREATE OR ALTER TRIGGER tr_AccountBalanceTrigger
ON Accounts AFTER UPDATE
AS
BEGIN
    IF UPDATE(Balance)
    BEGIN
        INSERT INTO Logs (AccountId, OldSum, NewSum)
        SELECT
            i.AccountHolderId,
            d.Balance,
            i.Balance
        FROM inserted AS i
        JOIN deleted AS d ON d.Id = i.Id
    END
END;
GO

UPDATE Accounts
SET Balance = 500
WHERE Id = 1;
GO

SELECT * FROM Logs;
GO