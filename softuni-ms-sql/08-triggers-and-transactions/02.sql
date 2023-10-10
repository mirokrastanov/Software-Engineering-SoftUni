USE [Bank];
GO

CREATE TABLE [NotificationEmails](
	[Id] INT IDENTITY PRIMARY KEY,
	[Recipient] INT FOREIGN KEY REFERENCES [Accounts],
	[Subject] VARCHAR(MAX),
	[Body] VARCHAR(MAX)
);
GO

CREATE OR ALTER TRIGGER tr_NotificationEmailTrigger
ON Logs AFTER INSERT
AS
BEGIN
    INSERT INTO NotificationEmails (Recipient, [Subject], Body)
    SELECT
        AccountId,
        CONCAT_WS(' ', 'Balance change for account:', AccountId),
        CONCAT_WS(' ', 'On', GETDATE(), 'your balance was changed from', OldSum, 'to', NewSum)
    FROM Logs
END;
GO

UPDATE Accounts
SET Balance = 500
WHERE Id = 1;
GO

INSERT INTO [Logs] ([AccountId], [OldSum], [NewSum])
VALUES (1, 123.12, 113.12);

SELECT * FROM Logs;
SELECT * FROM NotificationEmails;
