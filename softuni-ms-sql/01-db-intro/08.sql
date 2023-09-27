CREATE TABLE [Users](
	[Id] INT PRIMARY KEY IDENTITY,
	[Username] VARCHAR(30) NOT NULL,
	[Password] VARCHAR(26) NOT NULL,
	[ProfilePicture] VARBINARY(MAX),
	CHECK (DATALENGTH([ProfilePicture]) <= 900000),
	[LastLoginTime] DATE,
	[IsDeleted] VARCHAR(5),
	CHECK ([IsDeleted] = 'true' OR [IsDeleted] = 'false')
)

INSERT INTO [Users]([Username], [Password], [LastLoginTime], [IsDeleted])
	VALUES
	('Pesho', 'myPass123', '1995-05-25', 'true'),
	('Pesho', 'myPass123', '1995-05-25', 'false'),
	('Pesho', 'myPass123', '1995-05-25', 'true'),
	('Pesho', 'myPass123', '1995-05-25', 'false'),
	('Pesho', 'myPass123', '1995-05-25', 'false')

SELECT * FROM [Users]