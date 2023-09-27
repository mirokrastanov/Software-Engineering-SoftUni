CREATE TABLE [People](
	[Id] INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(200) NOT NULL,
	[Picture] VARBINARY(MAX),
	CHECK (DATALENGTH([Picture]) <= 2000000),
	[Height] DECIMAL(3, 2),
	[Weight] DECIMAL(5, 2),
	[Gender] CHAR(1) NOT NULL,
	CHECK ([Gender] = 'm' OR [Gender] = 'f'),
	[Birthdate] DATE NOT NULL,
	[Biography] NVARCHAR(MAX)
)

INSERT INTO [People]([Name], [Height], [Weight], [Gender], [Birthdate])
	VALUES
	('Pesho', 1.80, 88, 'm', '1995-05-25'),
	('Gosho', NULL, NULL, 'm', '1975-02-05'),
	('Niko', 1.90, 88, 'm', '1994-08-15'),
	('Polly', 1.60, 88, 'm', '1965-03-17'),
	('Linus', 1.70, 88, 'm', '1985-08-18')
    
SELECT * FROM [People]