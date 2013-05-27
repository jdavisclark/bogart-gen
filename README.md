# bogart-gen

## About
  Bogart is an awesome framework, but it currently does not come with a CLI.  This project is a start, providing a few simple generators to help you get started quicker and easier with Bogart.

## Installation

```
npm install bogart-gen
```

## Usage
  bogart-gen allows you to create repositories and apis for your Bogart application.  Both of these come with the ```-L, --lite``` option, which will generate only the basic structure (no scaffolded code).

### Generate a repository
  Repositories are the database abstraction layer of a Bogart application.  Currently, bogart-gen only supports MySQL.  Repos generated with bogart-gen will contain a basic CRUD with five functions:
  - ```javascript
  get:  // Get an object from the database by it's id
  ```
  - ```javascript
  set:  // Create a new entry in the DB, or update an existing one if the object passed to it has an ID
  ```
  - ```javascript
  search:  // More flexible than list, and return is compatible with GammaGrid
  ```
  - ```javascript
  del:  // Deletes an entry from the database 
  ```

```
bogart generate -r <modelName>
```

### Generate an API
  bogart-gen can create Bogart routing files for you so you can get up and running quickly.  All API routes generated by bogart-gen will start with '/api/'.  These API's will expose all of the repository methods; returns will be in JSON.
  Generate an API by calling the following from the command line:

```
bogart g -a <modelName>
```
  You'll notice that this uses 'g' instead of 'generate', this is a convenience provided by bogart-gen

