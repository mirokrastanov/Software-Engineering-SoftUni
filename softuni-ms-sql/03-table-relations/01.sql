CREATE DATABASE E03_MSSQL;

USE E03_MSSQL;

CREATE TABLE [Passports] (
	[PassportID] INT PRIMARY KEY,
	[PassportNumber] VARCHAR(MAX)
);

CREATE TABLE [Persons] (
	[PersonID] INT PRIMARY KEY,
	[FirstName] VARCHAR(MAX),
	[Salary] INT,
	[PassportID] INT FOREIGN KEY REFERENCES [Passports]([PassportID]) NOT NULL
);