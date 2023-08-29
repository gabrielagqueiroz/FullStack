CREATE DATABASE db_loja;

USE db_loja;

CREATE TABLE tb_categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30)
);

CREATE TABLE tb_produto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL, 
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id)
)


INSERT INTO tb_produto (nome, valor, categoria_id)
VALUES ('Mouse', 29.99, 1);


CREATE TABLE tb_cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);


CREATE TABLE tb_carinho (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    produto_id INT,
    quantidade_id INT,
    FOREIGN KEY (produto_id) REFERENCES tb_produto(id),
    FOREIGN KEY (cliente_id) REFERENCES tb_cliente(id)
);

INSERT INTO tb_categoria (nome) VALUES ('Informatica');

INSERT INTO tb_categoria (nome) VALUES ('Papelaria');
INSERT INTO tb_categoria (nome) VALUES ('Escritorio');
INSERT INTO tb_categoria (nome) VALUES ('Moveis');
INSERT INTO tb_categoria (nome) VALUES ('Petshop');

INSERT INTO tb_cliente (nome) VALUES ('Gabriela');
INSERT INTO tb_cliente (nome) VALUES ('Jonas');
INSERT INTO tb_cliente (nome) VALUES ('Tupã');
INSERT INTO tb_cliente (nome) VALUES ('Silas');
INSERT INTO tb_cliente (nome) VALUES ('Simon');

INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Mouse', 34.56, 1);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Ração', 198.12, 5);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Bolinha', 10.99, 5);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Cadeira', 499.99, 4);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Caneta', 1.98, 2);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Apagador', 10.60, 2);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Headset', 87.12, 1);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Mesa', 1098.89, 4);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Notebook', 5999.10, 1);


SELECT tb_produto.*, tb_categoria.nome
FROM tb_produto INNER JOIN tb_categoria            --OUTER JOIN--
ON tb_produto.categoria_id = tb_categoria.id;


SELECT tb_produto.*, tb_categoria.nome
FROM tb_produto RIGHT JOIN tb_categoria         
ON tb_produto.categoria_id = tb_categoria.id;


SELECT tb_produto.*, tb_categoria.nome
FROM tb_produto RIGHT JOIN tb_categoria         
ON tb_produto.categoria_id = tb_categoria.id
WHERE tb_produto.categoria_id IS NULL;

INSERT INTO tb_carinho (produto_id, cliente_id, quantidade_id) VALUES (3, 2, 1);
INSERT INTO tb_carinho (produto_id, cliente_id, quantidade) VALUES (4, 3, 2);
INSERT INTO tb_carinho (produto_id, cliente_id, quantidade) VALUES (5, 1, 2);
INSERT INTO tb_carinho (produto_id, cliente_id, quantidade) VALUES (2, 5, 3);
INSERT INTO tb_carinho (produto_id, cliente_id, quantidade) VALUES (7, 4, 4);


SELECT tb_cliente.nome, tb_carinho.quantidade, tb_produto.nome, tb_categoria.nome
FROM tb_carinho INNER JOIN tb_cliente,
FROM tb_carinho INNER JOIN tb_produto,
ON tb_carinho.cliente_id = tb_cliente.id,
ON tb_carinho.cliente_id = tb_produto.id;


SELECT tb_cliente.nome, tb_carinho.quantidade_id, tb_produto.nome, tb_categoria.nome
FROM tb_cliente INNER JOIN tb_carinho INNER JOIN tb_produto INNER JOIN tb_categoria
ON tb_carinho.cliente_id = tb_cliente.id
    AND tb_carinho.produto_id = tb_produto.id
    AND tb_produto.categoria_id = tb_categoria.id 



SELECT tb_cliente.nome AS cliente, tb_carinho.quantidade_id, tb_produto.nome AS produto, tb_categoria.nome
(tb_produto.valor * tb_carinho.quantidade) AS total
FROM tb_cliente INNER JOIN tb_carinho INNER JOIN tb_produto INNER JOIN tb_categoria
ON tb_carinho.cliente_id = tb_cliente.id
    AND tb_carinho.produto_id = tb_produto.id
    AND tb_produto.categoria_id = tb_categoria.id 
ORDER BY cliente;
