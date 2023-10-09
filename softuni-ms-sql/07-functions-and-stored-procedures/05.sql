USE [SoftUni];
GO

CREATE OR ALTER FUNCTION ufn_GetSalaryLevel (@salary DECIMAL(18, 4))
RETURNS VARCHAR(MAX)
AS
BEGIN 
	DECLARE @Result VARCHAR(MAX)
	IF (@salary < 30000) SET @Result = 'Low'
	ELSE IF (@salary <= 50000) SET @Result = 'Average'
	ELSE SET @Result = 'High'
	RETURN @Result
END;

GO
SELECT dbo.ufn_GetSalaryLevel(2000);
GO