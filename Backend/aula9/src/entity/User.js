// AQUI PREEENCHE O BANCO

const {DataTypes} = require('sequelize');
const orm = require('../connection/orm');

const User = orm.define('tb_user', {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
    }
});

orm.sync().then(() => {
    console.log('Pronto, tabela de categorias atualizada');
})


module.exports = User;

// node .\src\entity\User.js 


/* INSERT INTO tb_users (name, email, password, token, createdAt, updatedAt)
VALUES ('Maria', 'maria@gmail.com', '123456', '123', NOW(), NOW()); */