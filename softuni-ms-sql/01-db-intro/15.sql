CREATE DATABASE [Hotel]

USE [Hotel]

CREATE TABLE [Employees](
	[Id] INT PRIMARY KEY IDENTITY,
	[FirstName] NVARCHAR(MAX),
	[LastName] NVARCHAR(MAX) NOT NULL,
	[Title] NVARCHAR(MAX),
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Employees]([LastName])
	VALUES
	('Dir1'),
	('Dir2'),
	('Dir3')

CREATE TABLE [Customers](
	[Id] INT PRIMARY KEY IDENTITY,
	[AccountNumber] INT NOT NULL,
	[FirstName] NVARCHAR(MAX),
	[LastName] NVARCHAR(MAX),
	[PhoneNumber] INT,
	[EmergencyName] NVARCHAR(MAX),
	[EmergencyNumber] INT,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Customers]([AccountNumber])
	VALUES
	(51394),
	(27654),
	(78884)

CREATE TABLE [RoomStatus](
	[Id] INT PRIMARY KEY IDENTITY,
	[RoomStatus] BIT NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [RoomStatus]([RoomStatus])
	VALUES
	(1),
	(0),
	(0)

CREATE TABLE [RoomTypes](
	[Id] INT PRIMARY KEY IDENTITY,
	[RoomType] NVARCHAR(MAX) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [RoomTypes]([RoomType])
	VALUES
	('Dir1'),
	('Dir2'),
	('Dir3')

CREATE TABLE [BedTypes](
	[Id] INT PRIMARY KEY IDENTITY,
	[BedType] NVARCHAR(MAX) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [BedTypes]([BedType])
	VALUES
	('Dir1'),
	('Dir2'),
	('Dir3')

CREATE TABLE [Rooms](
	[Id] INT PRIMARY KEY IDENTITY,
	[RoomNumber] INT NOT NULL,
	[RoomType] INT FOREIGN KEY REFERENCES [RoomTypes]([Id]) NOT NULL,
	[BedType] INT FOREIGN KEY REFERENCES [BedTypes]([Id]) NOT NULL,
	[Rate] INT,
	[RoomStatus] INT FOREIGN KEY REFERENCES [RoomStatus]([Id]) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Rooms]([RoomNumber], [RoomType], [BedType], [RoomStatus])
	VALUES
	(324, 1, 1, 1),
	(354, 1, 1, 1),
	(384, 1, 1, 1)

CREATE TABLE [Payments](
	[Id] INT PRIMARY KEY IDENTITY,
	[EmployeeId] INT FOREIGN KEY REFERENCES [Employees]([Id]) NOT NULL,
	[PaymentDate] DATE,
	[AccountNumber] INT,
	[FirstDateOccupied] DATE,
	[LastDateOccupied] DATE,
	[TotalDays] INT,
	[AmountCharged] INT,
	[TaxRate] INT,
	[TaxAmount] INT,
	[PaymentTotal] INT,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Payments]([EmployeeId])
	VALUES
	(1),
	(1),
	(1)

CREATE TABLE [Occupancies](
	[Id] INT PRIMARY KEY IDENTITY,
	[EmployeeId] INT FOREIGN KEY REFERENCES [Employees]([Id]) NOT NULL,
	[DateOccupied] DATE,
	[AccountNumber] INT,
	[RoomNumber] INT FOREIGN KEY REFERENCES [Rooms]([Id]) NOT NULL,
	[RateApplied] INT,
	[PhoneCharge] INT,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Occupancies]([EmployeeId], [RoomNumber])
	VALUES
	(2, 1),
	(1, 3),
	(3, 2)

SELECT * FROM [Occupancies]