SELECT 
CONCAT_WS('@', CONCAT_WS('.', [FirstName], [LastName]), 'softuni.bg') AS [Full Email Address]
FROM [Employees];