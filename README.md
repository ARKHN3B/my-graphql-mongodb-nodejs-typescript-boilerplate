# My GraphQL/MongoDB/NodeJS/Typescript Boilerplate

### 1. Chosen technologies

You can see here that I decided to use **React** for the visual layer, **MongoDB** (the Atlas service) for the data
layer,
**NodeJS** for the server and **GraphQL** which will allow me to communicate data between _Node_ and _React_.

During the consolidation phase, I started to focus on an algorithmic problem related to language and performance: "How
to generate a list of users where each entry contains a list of bi-directionally related user IDs".

### 2. Folder structure, architectures...

#### Back

    src
        config
        loaders
        models
        resolvers
        schemas
        types
        utils
        app.js
        schema.ts
        server.ts

- **CONFIG**
    - contains the configuration files if necessary
- **JOBS**
    - contains scheduled automation scripts if necessary
- **LOADERS**
    - contains modules to be launched at process initialization
- **MODELS**
    - contains the models of the database
        - Note that here we can see that the file names are preceded by the action field _(e.g. user)_ and a
          subtype `model`, which makes it easier to find your way between different files that might have the same name.
- **RESOLVERS**
    - this is a service layer where the business logic is located
    - inside are a sub-layer of files yet in name the field of action _(e.g. user)_ and two sub files for
      each `mutations` and `queries` to differentiate the operations.
- **SCHEMAS**
    - this is our api, our controllers
    - inside are a sub-layer of files yet in name the field of action _(e.g. user)_ and three sub files for
      each `types` (global definition of the structure of our operations), `mutations` (definition of mutations)
      and `queries` (definition of queries) to differentiate the scopes.
- **TYPES**
    - contains the TypeScript declaration files
- **UTILS**
    - contains all kinds of utility files if needed
- **app.js**, **schema.ts** and **server.ts**
    - here app.js and server.js are dissociated, server.js contains the hot configuration of the server and app
      instantiates it
    - schema.ts, this is a hot configuration file to setup the proper functioning of _nexusjs_ library

The goal of this architecture is to promote the principle of separation of concerns (SoC), easier to maintain, to
understand, to reuse, to test, etc. We separate the api/controller part (schemas), the services part (resolvers) and the
DAL part (models).
