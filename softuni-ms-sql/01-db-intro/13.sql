CREATE DATABASE [Movies]

USE [Movies]

CREATE TABLE [Directors](
	[Id] INT PRIMARY KEY IDENTITY,
	[DirectorName] NVARCHAR(MAX) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Directors]([DirectorName])
	VALUES
	('Dir1'),
	('Dir2'),
	('Dir3'),
	('Dir4'),
	('Dir5')

CREATE TABLE [Genres](
	[Id] INT PRIMARY KEY IDENTITY,
	[GenreName] NVARCHAR(MAX) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Genres]([GenreName])
	VALUES
	('Gen1'),
	('Gen2'),
	('Gen3'),
	('Gen4'),
	('Gen5')

CREATE TABLE [Categories](
	[Id] INT PRIMARY KEY IDENTITY,
	[CategoryName] NVARCHAR(MAX) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Categories]([CategoryName])
	VALUES
	('Cat1'),
	('Cat2'),
	('Cat3'),
	('Cat4'),
	('Cat5')

CREATE TABLE [Movies](
	[Id] INT PRIMARY KEY IDENTITY,
	[Title] NVARCHAR(MAX) NOT NULL,
	[DirectorId] INT FOREIGN KEY REFERENCES [Directors]([Id]) NOT NULL,
	[CopyrightYear] INT NOT NULL,
	[Length] INT NOT NULL,
	[GenreId] INT FOREIGN KEY REFERENCES [Genres]([Id]) NOT NULL,
	[CategoryId] INT FOREIGN KEY REFERENCES [Categories]([Id]) NOT NULL,
	[Rating] INT,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Movies]([Title], [DirectorId], [CopyrightYear], [Length], [GenreId], [CategoryId])
	VALUES
	('Movie1', 3, 2022, 120, 4, 5),
	('Movie2', 4, 2013, 130, 5, 4),
	('Movie3', 5, 2017, 140, 1, 3),
	('Movie4', 1, 2002, 100, 2, 2),
	('Movie5', 2, 2012, 110, 3, 1)

SELECT * FROM [Movies]