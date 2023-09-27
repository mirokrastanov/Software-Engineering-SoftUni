CREATE DATABASE [CarRental]

USE [CarRental]

CREATE TABLE [Categories](
	[Id] INT PRIMARY KEY IDENTITY,
	[CategoryName] NVARCHAR(MAX) NOT NULL,
	[DailyRate] NVARCHAR(MAX),
	[WeeklyRate] NVARCHAR(MAX),
	[MonthlyRate] NVARCHAR(MAX),
	[WeekendRate] NVARCHAR(MAX)
)

INSERT INTO [Categories]([CategoryName])
	VALUES
	('C1'),
	('C2'),
	('C3')

CREATE TABLE [Cars](
	[Id] INT PRIMARY KEY IDENTITY,
	[PlateNumber] INT NOT NULL,
	[Manufacturer] NVARCHAR(MAX),
	[Model] NVARCHAR(MAX),
	[CarYear] INT,
	[CategoryId] INT FOREIGN KEY REFERENCES [Categories]([Id]) NOT NULL,
	[Doors] INT,
	[Picture] VARBINARY(MAX),
	[Condition] NVARCHAR(MAX),
	[Available] BIT NOT NULL
)

INSERT INTO [Cars]([PlateNumber], [CategoryId], [Available])
	VALUES
	(308, 2, 0),
	(7, 1, 1),
	(81, 3, 1)

CREATE TABLE [Employees](
	[Id] INT PRIMARY KEY IDENTITY,
	[FirstName] NVARCHAR(MAX) NOT NULL,
	[LastName] NVARCHAR(MAX) NOT NULL,
	[Title] NVARCHAR(MAX) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Employees]([FirstName], [LastName], [Title])
	VALUES
	('F1', 'L1', 'T1'),
	('F2', 'L2', 'T2'),
	('F3', 'L3', 'T3')

CREATE TABLE [Customers](
	[Id] INT PRIMARY KEY IDENTITY,
	[DriverLicenseNumber] INT,
	[Fullname] NVARCHAR(MAX) NOT NULL,
	[Address] NVARCHAR(MAX),
	[City] NVARCHAR(MAX),
	[ZIPCode] NVARCHAR(MAX),
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Customers]([FullName])
	VALUES
	('Dir1'),
	('Dir2'),
	('Dir3')

CREATE TABLE [RentalOrders](
	[Id] INT PRIMARY KEY IDENTITY,
	[EmployeeId] INT FOREIGN KEY REFERENCES [Employees]([Id]) NOT NULL,
	[CustomerId] INT FOREIGN KEY REFERENCES [Customers]([Id]) NOT NULL,
	[CarId] INT FOREIGN KEY REFERENCES [Cars]([Id]) NOT NULL,
	[TankLevel] INT,
	[KilometrageStart] INT,
	[KilometrageEnd] INT,
	[TotalKilometrage] INT,
	[StartDate] DATE,
	[EndDate] DATE,
	[TotalDays] INT,
	[RateApplied] INT,
	[TaxRate] INT,
	[OrderStatus] NVARCHAR(MAX),
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [RentalOrders]([EmployeeId], [CustomerId], [CarId])
	VALUES
	(1, 2, 3),
	(3, 1, 2),
	(2, 3, 1)

SELECT * FROM [RentalOrders]