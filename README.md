# 🐠 Digital Aquarium

## 📌 Endpoints

**POST** `/api/fish`

Used to create a new fish with specified details such as name, description, image, and type.

---

### ✅ Sample Request

**Request Body:**

```json
{
  "name": "Gold Fish",
  "imageUrl": "https://photo.com/fish",
  "description": "Gold Fish",
  "type": "amarican"
}
```

### 📦 Sample Response

**Status Code:** `201 Created`

```json
{
  "message": "Fish created successfully",
  "data": {
    "id": "6873f603095ce93c46e2263f",
    "name": "Gold Fish",
    "description": "Gold Fish",
    "imageUrl": "https://photo.com/fish",
    "type": "amarican"
  }
}
```

---

### 🐟 Get All Fish

This endpoint retrieves all fish entries stored in the Digital Aquarium system.

### 🧩 Endpoint

**GET** `/api/fish`

### 📦 Sample Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "message": "Fish fetched successfully",
  "data": [
    {
      "id": "6873f50f4c7a5fb47a0576fd",
      "name": "Gold Fish",
      "description": "Gold Fish",
      "imageUrl": "https://photo.com/fish",
      "type": "amarican"
    },
    {
      "id": "6873f5104c7a5fb47a0576ff",
      "name": "Fighter fish",
      "description": "Fighter fish",
      "imageUrl": "https://photo.com/fighter-fish",
      "type": "african"
    }
  ]
}
```

---

### 🎯 Get Fish by ID

This endpoint retrieves a single fish from the Digital Aquarium by its unique ID.

### 🧩 Endpoint

**GET** `/api/fish/:id`

- `:id` — The unique identifier of the fish to fetch

### 📦 Sample Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "message": "Fish fetched successfully",
  "data": {
    "id": "6873f50f4c7a5fb47a0576fd",
    "name": "Gold Fish",
    "description": "Gold Fish",
    "imageUrl": "https://photo.com/fish",
    "type": "amarican"
  }
}
```

---

## ❌ Delete Fish

This endpoint allows you to delete a fish from the Digital Aquarium by its unique ID.

### 🧩 Endpoint

**DELETE** `/api/fish/:id`

- `:id` — The unique ID of the fish to be deleted

### 📦 Sample Response

**Status Code:** `204 No Content`

- No response body is returned upon successful deletion.

---

### 🧭 Create Aquarium View Dimension (2D / 3D)

**POST** `/api/dimensions`

This endpoint allows you to create and set the display dimension of the Digital Aquarium UI—either in 2D or 3D view.

### ✅ Sample Request

**Request Body:**

```json
{
  "view": "3D"
}
```

### 📦 Sample Response

**Status Code:** `201 Created`

```json
{
  "message": "Dimension created successfully",
  "data": {
    "view": "3D"
  }
}
```

or

**Status Code:** `400 Bad Request`

```json
{
  "message": "Dimension already created",
  "data": {
    "view": "3D"
  }
}
```

---

### 🧭 Fetch Aquarium View Dimension (2D / 3D)

**POST** `/api/dimensions`

This endpoint allows you to fetch the display dimension of the Digital Aquarium UI—either in 2D or 3D view.

### 📦 Sample Response

**Status Code:** `200 OK`

```json
{
  "message": "Dimension fetched successfully",
  "data": {
    "view": "3D"
  }
}
```
or

**Status Code:** `404 Not Found`

```json
{
  "message": "No dimension found. Please create dimensions"
}
```

---

### 🧭 Set Aquarium View Dimension (2D / 3D)

This endpoint allows you to set the display dimension of the Digital Aquarium UI—either in 2D or 3D view.

### 🧩 Endpoint

**PUT** `/api/dimensions`

### ✅ Sample Request

**Request Body:**

```json
{
  "view": "3D"
}
```

📦 Sample Success Response (when view is changed)
Status Code: 200 OK

Response Body:

```json
{
  "message": "dimensions updated successfully",
  "data": {
    "view": "3D"
  }
}
```

### 📦 Sample No-Update Response (when view is already the same)

**Status Code:** `400 Bad request`

Response Body:

```json
{
  "message": "View not updated as already same dimensions implemented",
  "data": {
    "view": "3D"
  }
}
```

---

CURL:

🔹 Get All Fish

GET:

```sh
curl --location 'https://digital-aquarium.vercel.app/api/fish'
```

🔹 Add a New Fish

POST:

```sh
curl --location 'http://localhost:3000/api/fish' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Gold Fish",
    "imageUrl": "https://photo.com/fish",
    "description": "Gold Fish",
    "type": "amarican"
}'
```

🔹 Get Specific Fish by ID

GET:

```sh
curl --location 'https://digital-aquarium.vercel.app/api/fish/68728c66c8c9a3be5ec78a01'
```

🔹 Update Dimensions

GET:

```sh
curl --location --request PUT 'https://digital-aquarium.vercel.app/api/dimensions' \
--header 'Content-Type: application/json' \
--data '{
    "view": "3D"
}'
```
