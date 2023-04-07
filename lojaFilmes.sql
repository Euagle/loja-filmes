-- Active: 1680730128779@@127.0.0.1@3306


CREATE TABLE filmes(
    id text PK UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO filmes(id, name, category)
VALUES( "af1", "Certas Pessoas", "comédia"),
("af2", "Na sua casa ou na minha?", "comédia romantica" ),
("af3", "Meu Nome é Dolemite", "comédia" ),
("af4","De Volta ao Baile", "comédia" ),
("af5", "Os Farofeiros", "comédia");

SELECT * FROM filmes;


DROP TABLE filmes;