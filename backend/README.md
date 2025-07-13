GET:

```sh
curl --location 'https://digital-aquarium.vercel.app/api/fish'
```

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

GET:

```sh
curl --location 'https://digital-aquarium.vercel.app/api/fish/68728c66c8c9a3be5ec78a01'
```

GET:

```sh
curl --location --request PUT 'https://digital-aquarium.vercel.app/api/dimentions' \
--header 'Content-Type: application/json' \
--data '{
    "view": "3D"
}'
```
