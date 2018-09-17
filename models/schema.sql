DROP DATABASE IF EXISTS group2db;
CREATE DATABASE group2db;
USE group2db;

CREATE TABLE askanything (
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR(125) NULL,
    answer VARCHAR,
    PRIMARY KEY (id)
);

INSERT INTO askanything (question, answer)
VALUES("What is node.js?", "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.");