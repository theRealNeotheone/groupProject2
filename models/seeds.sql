/* askanything table */

INSERT INTO askanything (question, answer)
VALUES ("create package.json", "npm init -y");

INSERT INTO askanything (question, answer)
VALUES ("git create my own branch", "git checkout -b nameofyourbranchgoeshere");

INSERT INTO askanything (question, answer)
VALUES ("install dependencies if package.json exists", "npm install");

INSERT INTO askanything (question, answer)
VALUES ("connect to server", "node server.js");

INSERT INTO askanything (question, answer)
VALUES ("for loop syntax", "for (var i = 0; i < array.length; i++) {};")

INSERT INTO askanything (question, answer)
VALUES ("include YouTube videos in html", "right-click on YouTube video, then copy embed code");

INSERT INTO askanything (question, answer)
VALUES ("view source code in google browser", "control + u");

INSERT INTO askanything (question, answer)
VALUES("see files in folder", "ls");

INSERT INTO askanything (question, answer)
VALUES ("dummy text in html", "inside <p> tag element type: lorem then press tab");

INSERT INTO askanything (question, answer)
VALUES ("comment out block of code", "/* and */");

/* glossary table */

INSERT INTO glossary (term, define)
VALUES ("Ajax", "A set of Web development techniques using many Web technologies on the client side to create asynchronous Web applications. With Ajax, Web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page");

INSERT INTO glossary (term, define)
VALUES ("Recursion", "A technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional languages this approach to looping is the default.");

INSERT INTO glossary (term, define)
VALUES ("Callback function", "In computer programming, a callback, also known as a call-after function, is any executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at a given time. This execution may be immediate as in a synchronous callback, or it might happen at a later time as in an asynchronous callback");

INSERT INTO glossary (term, define)
VALUES ("Node.js", "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.");

INSERT INTO glossary (term, define)
VALUES ("Constructor", "In class-based object-oriented programming, a constructor (abbreviation: ctor) is a special type of subroutine called to create an object. It prepares the new object for use, often accepting arguments that the constructor uses to set required member variables. Immutable objects must be initialized in a constructor.")

INSERT INTO glossary (term, define)
VALUES ("Express.js", "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.");

INSERT INTO glossary (term, define)
VALUES ("MySQL", "MySQL is a freely available open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). SQL is the most popular language for adding, accessing and managing content in a database.");

INSERT INTO glossary (term, define)
VALUES("Handlebars", "A simple web template system with implementations available for ActionScript, C++, Clojure, CoffeeScript, ColdFusion, Common Lisp, D, Dart, Delphi, Erlang, Fantom, Go, Haskell, Io, Java, JavaScript, Julia, Lua, .NET, Objective-C, OCaml, Perl, PHP, Pharo, Python, R, Racket, Ruby, Rust, Scala, Smalltalk, Swift, Tcl, CFEngine and XQuery.");

INSERT INTO glossary (term, define)
VALUES ("Sequelize", "Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.");

INSERT INTO glossary (term, define)
VALUES ("Heroku", "A cloud platform as a service supporting several programming languages. Heroku, one of the first cloud platforms, has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.");
