# Sequelize Guitar API
This API allows you to perform CRUD operations on a database of guitars.

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a guitar

**Method**: ```POST```

**Endpoint**: ```/api/guitars```

**Description**: This endpoint creates a new guitar with the provided information in the request body.

Request Body:
```
{
  "brand": "string",
  "model": "string",
  "year": integer,
  "color": "string"
}
```

Response:
```
{
  "id": integer,
  "brand": "string",
  "model": "string",
  "year": integer,
  "color": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
}
```

### Get all guitars

**Method**: ```GET```

**Endpoint**: ```/api/guitars```

**Description**: This endpoint retrieves all the guitars stored in the database.

Response:
```
{
  "id": integer,
  "brand": "string",
  "model": "string",
  "year": integer,
  "color": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
}
```

### Update a guitar

**Method**: ```PUT```

**Endpoint**: ```/api/guitars/:guitarId```

**Description**: This endpoint updates the guitar with the specified id using the information in the request body.

Request Body:
```
{
  "brand": "string",
  "model": "string",
  "year": integer,
  "color": "string"
}
```

Response:
```
{
  "id": integer,
  "brand": "string",
  "model": "string",
  "year": integer,
  "color": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
}
```

### Delete a guitar

**Method**: ```DELETE```

**Endpoint**: ```/api/guitars/:guitarId```

**Description**: This endpoint deletes the guitar with the specified id from the database.

Response:
```
{
  "id": integer,
  "brand": "string",
  "model": "string",
  "year": integer,
  "color": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
}
```