DROP DATABASE IF EXISTS group2db;
CREATE DATABASE group2db;
USE group2db;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

CREATE TABLE askanything (
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR(80) NULL,
    answer VARCHAR(500),
    PRIMARY KEY (id)
);

CREATE TABLE glossaries (
    id INT NOT NULL AUTO_INCREMENT,
    terminology VARCHAR(80) NULL,
    define VARCHAR(80) NULL,
    PRIMARY KEY (id)
);



