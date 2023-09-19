// AQUI PREEENCHE O BANCO

const {DataTypes} = require('sequelize');
const orm = require('../connection/orm');

const Category = orm.define('tb_category', {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
});

orm.sync().then(() => {
    console.log('Pronto, tabela de categorias atualizada');
})


module.exports = Category;