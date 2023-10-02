CREATE DATABASE [E03_2_University];

USE [E03_2_University];

CREATE TABLE [Subjects] (
	[SubjectID] INT IDENTITY PRIMARY KEY,
	[SubjectName] VARCHAR(MAX)
);

CREATE TABLE [Majors] (
	[MajorID] INT IDENTITY PRIMARY KEY,
	[Name] VARCHAR(MAX)
);

CREATE TABLE [Students] (
	[StudentID] INT IDENTITY PRIMARY KEY,
	[StudentNumber] INT,
	[StudentName] VARCHAR(MAX),
	[MajorID] INT FOREIGN KEY REFERENCES [Majors]([MajorID])
);

CREATE TABLE [Payments] (
	[PaymentID] INT IDENTITY PRIMARY KEY,
	[PaymentDate] DATE,
	[PaymentAmount] INT,
	[StudentID] INT FOREIGN KEY REFERENCES [Students]([StudentID])
);

CREATE TABLE [Agenda] (
	[StudentID] INT FOREIGN KEY REFERENCES [Students]([StudentID]),
	[SubjectID] INT FOREIGN KEY REFERENCES [Subjects]([SubjectID])
	PRIMARY KEY([StudentID], [SubjectID])
);
