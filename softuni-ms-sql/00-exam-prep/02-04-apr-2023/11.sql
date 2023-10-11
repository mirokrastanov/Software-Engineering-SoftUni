CREATE FUNCTION udf_ProductWithClients(@name NVARCHAR(MAX))
RETURNS INT AS
BEGIN
	RETURN (
		SELECT
			COUNT(*) AS [Count]
		FROM Clients AS cl
		JOIN ProductsClients AS pc ON cl.Id = pc.ClientId
		JOIN Products AS p ON pc.ProductId = p.Id
		WHERE p.[Name] = @name
	)
END;
