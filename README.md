# RxJs_Zero_Server

This repo is the **Server part** of a group of 3 repos.

Links to the 3 repos

- [RxJs_Zero_Scratch](https://github.com/rblmdst/RxJs_Zero_Scratch)
- [RxJs_Zero_Angular](https://github.com/rblmdst/RxJs_Zero_Angular)
- [RxJs_Zero_Server](https://github.com/rblmdst/RxJs_Zero_Server)

**Purpose** : Showcase/demistifying RxJs during the live coding of my talk "**Reactive Programming & RxJS will no longer hold any secrets for you !!**" (La Programmation Réactive & RxJS n'auront plus de secrets pour vous !!).

This is an **Express** (Node.js) based server, which will be used as backend by the [Angular Application](https://github.com/rblmdst/RxJs_Zero_Angular).

### Install dependencies

```
npm install
```

### Build the server :

```
npm run build

# In dev (watch mode if you want)
npm run build:dev
```

### Run the server :

```
npm run start

# In dev (watch mode if you want)
npm run start:dev
```

### Available endpoints

- `localhost:3000/developers`

**Eg. of request** :

```
GET localhost:3000/developers?type=frontend&level=expert
```

**Result** :

```json
[
  {
    "id": "eb9ad",
    "firstName": "Safa",
    "lastName": "Hamderik",
    "level": "expert",
    "type": "frontend",
    "country": "504",
    "technos": ["React", "JavaScript"]
  },
  {
    "id": "e5b8d",
    "firstName": "Djoh",
    "lastName": "Debgi",
    "level": "expert",
    "type": "frontend",
    "country": "120",
    "technos": ["Angular", "JavaScript"]
  }
]
```

- `/developers`

**Eg. of request** :

```
GET localhost:3000/developers?type=frontend&level=expert
```

**Result** :

```json
[
  {
    "id": "eb9ad",
    "firstName": "Safa",
    "lastName": "Hamderik",
    "level": "expert",
    "type": "frontend",
    "country": "504",
    "technos": ["React", "JavaScript"]
  },
  {
    "id": "e5b8d",
    "firstName": "Djoh",
    "lastName": "Debgi",
    "level": "expert",
    "type": "frontend",
    "country": "120",
    "technos": ["Angular", "JavaScript"]
  }
]
```

- `/countries`

**Eg. of request** :

```
GET localhost:3000/countries?name=gol
```

**Result** :

```json
[
  {
    "name": "Angola",
    "code": "AO",
    "numeric": "024"
  },
  {
    "name": "Mongolia",
    "code": "MN",
    "numeric": "496"
  }
]
```

- `/countries/:countryNumericCode`

  **Eg. of request** :

```
GET localhost:3000/countries/024
```

**Result** :

```json
{
  "name": "Angola",
  "code": "AO",
  "numeric": "024"
}
```

- `/currencies:countryCode`

  **Eg. of request** :

```
GET localhost:3000/currencies/AO
```

**Result** :

```json
{
  "country": "AO",
  "currencyName": "Kwanza",
  "currencyCode": "AOA"
}
```
