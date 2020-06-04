# Course work

## Introduction

  Many popular database products such as **SQL database management systems (DBMS)** can only store and manipulate scalar values such as integers and strings organized within tables. The programmer must either convert the object values into groups of simpler values for storage in the database (and convert them back upon retrieval), or only use simple scalar values within the program. Object-relational mapping implements the first approach.

  The heart of the problem involves translating the logical representation of the objects into an atomized form that is capable of being stored in the database while preserving the properties of the objects and their relationships so that they can be reloaded as objects when needed.

## Subject of the work

  In this project I create a simple webserver that provides remote access to a database which stores information about students, groups and faculties of a fictional university. While it runs, clients can make requests to get information about students or to add a student to the database. Tables are represented by ORM models that are initialized using instruments of a programming language rather than SQL queries.  
  
  The way that models relate to each other:
+ students belong to one group and one faculty
+ groups have many students
+ faculties have many groups

## Technology stack

  + *Node.js, express, body-parser*(used to create a server)
  + *axios*(used to emulate client-side requests)
  + *PostgreSQL*(acts as database)
  + *sequelize*(used to create ORM models and interact with PostgreSQL)

## Installation
 
Clone the repository
```bash
git init
git clone https://github.com/demetrisKPI/orm-usage
```
  Use your package manager *(npm, yarn etc.)* to install modules:
```bash
npm install
```
  To start a server run this command:
```bash
npm start
```
  Note, that you need to have *PostgreSQL* and *NodeJS v10+* to run the server.
  Create a database, enter database name, user name and password in *database.js* file:
```javascript
const db = new Sequelize('db_name', 'user_name', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});
```

## Project status

  Job to do:
+ avoid copying identical groups and faculties
+ implement relations groups->students, faculties->groups
  
Project coordinator: dimakpimuzhenko@gmail.com
