USE db_escola;

CREATE TABLE tb_aluno (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP 
)

/* DEFAULT -> INICIA COM UM VALOR */ 


-- BUSCAR TODOS OS ALUNOS --
SELECT * FROM tb_aluno;

-- BUSCAR APENAS ALGUMAS COLUNAS DE TODOS OS ALUNOS --
SELECT nome, criado_em FROM tb_aluno;

SELECT nome FROM tb_aluno;


-- BUSCAR UM ALUNO ESPECIFICO --
SELECT * FROM tb_aluno WHERE id='10';

-- BUSCAR APENAS ALGUMAS COLUNAS DE UM ALUNO ESPECIFICO --
SELECT nome, cpf FROM tb_aluno WHERE id='10';

-- BUSCAR APENAS ALUNOS QUE NASCERAM DEPOIS DE 2000 --
SELECT * FROM tb_aluno WHERE data_nascimento >= '2000-01-01';

-- BUSCAR ALUNOS QUE NASCERAM ENTRE 1995 E 2000 --
SELECT * FROM tb_aluno
WHERE data_nascimento >= '1995-01-01'
AND data_nascimento <= '1999-12-31';

SELECT * FROM tb_aluno
WHERE data_nascimento BETWEEN '1995-01-01' AND '1999-12-31';


-- BUSCAR ALUNOS QUE CONTENHAM UMA EXPRESSÃO -- 
SELECT * FROM tb_aluno WHERE nome LIKE '%Silva%'; /*NOME SILVA EM QUALQUER LUGAR*/
SELECT * FROM tb_aluno WHERE nome LIKE '%Silva'; /*TERMINA COM O NOME SILVA*/
SELECT * FROM tb_aluno WHERE nome LIKE 'Silva%'; /*COMEÇA COM O NOME SILVA*/


-- BUSCAR ALUNOS QUE CONTENHAM UMA EXPRESÃO --
SELECT * FROM tb_aluno WHERE nome LIKE '%Silva%' OR nome LIKE '%francisco%';



INSERT INTO tb_aluno 
    (nome, data_nascimento, cpf)
VALUES
    ('Gabriela P Gomes Queiroz', '1997-05-02', '61361361363');

INSERT INTO tb_aluno 
    (nome, data_nascimento, cpf)
VALUES
   ('Jonas Augusto Lopes Queiroz', '1992-10-31', '61461361363');

INSERT INTO tb_aluno 
    (nome, data_nascimento, cpf)
VALUES
    ('Damaris Pereira Gomes', '1998-06-17', '61461361364');

INSERT INTO tb_aluno 
    (nome, data_nascimento, cpf)
VALUES
    ('Regina C P Gomes', '1963-01-18', '26826826873');

INSERT INTO tb_aluno 
    (nome, data_nascimento, cpf)
VALUES
    ('Adriano P Gomes', '1974-11-28', '27427427474');

INSERT INTO tb_aluno 
    (nome, data_nascimento, cpf)
VALUES
    ('Tupã Gomes Queiroz', '2016-06-02', '61361461334');
   


    

