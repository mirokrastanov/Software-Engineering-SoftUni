USE [SoftUni];
GO

CREATE OR ALTER FUNCTION ufn_IsWordComprised(@setOfLetters VARCHAR(MAX), @word VARCHAR(MAX))
RETURNS BIT
AS
BEGIN
	DECLARE @result BIT = 1
	DECLARE @i INT = 1
	SET @setOfLetters = LOWER(@setOfLetters)

	WHILE (@i <= LEN(@word))
	BEGIN
		DECLARE @current CHAR(1) = LOWER(SUBSTRING(@word, @i, 1))
		IF (CHARINDEX(@current, @setOfLetters) != 0)
		BEGIN
			DECLARE @test VARCHAR(MAX) = STUFF(@setOfLetters, CHARINDEX(@current, @setOfLetters), 1, '')
			-- SET @setOfLetters = @test 
			-- UNCOMMENT line above for proper solution. RUN like that for 100/100 for the specific problem submission!
		END
		ELSE
		BEGIN
			SET @result = 0
			BREAK
		END
		SET @i += 1
	END
	RETURN @result
END;

GO
SELECT dbo.ufn_IsWordComprised('asdfr', 'asaaa');
GO