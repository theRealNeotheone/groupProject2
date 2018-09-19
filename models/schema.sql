DROP DATABASE IF EXISTS group2db;
CREATE DATABASE group2db;
USE group2db;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

CREATE TABLE askanything (
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR(80) NULL,
    answer VARCHAR,
    PRIMARY KEY (id)
);

INSERT INTO askanything (question, answer)
VALUES ("Recursion", "A technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional languages this approach to looping is the default.");

INSERT INTO askanything (question, answer)
VALUES ("Callback function", "In computer programming, a callback, also known as a call-after function, is any executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at a given time. This execution may be immediate as in a synchronous callback, or it might happen at a later time as in an asynchronous callback");

INSERT INTO askanything (question, answer)
VALUES ("Node.js", "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.");

INSERT INTO askanything (question, answer)
VALUES ("Express.js", "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.");

INSERT INTO askanything (question, answer)
VALUES ("MySQL", "MySQL is a freely available open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). SQL is the most popular language for adding, accessing and managing content in a database.");

INSERT INTO askanything (question, answer)
VALUES("Handlebars", "A simple web template system with implementations available for ActionScript, C++, Clojure, CoffeeScript, ColdFusion, Common Lisp, D, Dart, Delphi, Erlang, Fantom, Go, Haskell, Io, Java, JavaScript, Julia, Lua, .NET, Objective-C, OCaml, Perl, PHP, Pharo, Python, R, Racket, Ruby, Rust, Scala, Smalltalk, Swift, Tcl, CFEngine and XQuery.");

INSERT INTO askanything (question, answer)
VALUES ("Sequelize", "Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.");


