# GraphQL Countries API

Une API GraphQL simple permettant de gérer des pays avec leurs informations.

## Technologies utilisées

- Node.js
- TypeScript
- Apollo Server
- TypeGraphQL
- TypeORM
- SQLite

## Installation

1. Cloner le repository :

```bash
git clone [URL_DU_REPO]
cd [NOM_DU_PROJET]
```

2. Installer les dépendances :

```bash
npm install
```

## Démarrage

### Mode développement

```bash
npm run dev
```

Le serveur sera accessible à l'adresse : `http://localhost:4000`

### Mode production

```bash
npm run build
npm start
```

## Fonctionnalités

### Mutations

#### Créer un pays

```graphql
mutation {
  createCountry(code: "FR", name: "France", emoji: "🇫🇷", continent: "Europe") {
    code
    name
    emoji
    continent
  }
}
```

### Queries

#### Récupérer tous les pays

```graphql
query {
  countries {
    code
    name
    emoji
    continent
  }
}
```

#### Récupérer un pays par son code

```graphql
query {
  country(code: "FR") {
    code
    name
    emoji
    continent
  }
}
```

#### Récupérer les pays par continent

```graphql
query {
  countriesByContinent(continent: "Europe") {
    code
    name
    emoji
    continent
  }
}
```

## Structure du projet

```
src/
├── config/
│   └── db.ts
├── entities/
│   └── Country.ts
├── resolvers/
│   └── CountryResolver.ts
├── data-source.ts
└── index.ts
```

## Auteur

Mathieu SAURET
