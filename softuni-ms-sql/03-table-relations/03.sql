CREATE TABLE [Students] (
	[StudentID] INT IDENTITY PRIMARY KEY,
	[Name] VARCHAR(MAX)
);

CREATE TABLE [Exams] (
	[ExamID] INT IDENTITY(101, 1) PRIMARY KEY,
	[Name] VARCHAR(MAX)
);

CREATE TABLE [StudentsExams] (
	[StudentID] INT FOREIGN KEY REFERENCES [Students]([StudentID]),
	[ExamID] INT FOREIGN KEY REFERENCES [Exams]([ExamID]),
	CONSTRAINT PK_StudentsExams
	PRIMARY KEY(StudentID, ExamID)
);

INSERT INTO [Students] ([Name])
VALUES
	('Mila'),
	('Toni'),
	('Ron');

INSERT INTO [Exams] ([Name])
VALUES
	('SpringMVC'),
	('Neo4j'),
	('Oracle 11g');

INSERT INTO [StudentsExams] ([StudentID], [ExamID])
VALUES
	(1, 101),
	(1, 102),
	(2, 101),
	(3, 103),
	(2, 102),
	(2, 103);