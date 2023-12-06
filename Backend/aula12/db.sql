CREATE DATABASE db_floresta;

USE db_floresta;

CREATE TABLE tb_bebidas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (20) NOT NULL,
    quantidade INT NOT NULL, 
    descricao VARCHAR (100) NOT NULL
);

INSERT INTO tb_bebidas (nome, quantidade, descricao)
VALUES ('Suco', 12, 'Maracuja')