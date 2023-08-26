const sequelize=require('../util/database');
const Sequelize=require('sequelize');
const user=sequelize.define("user",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    number:{
        type:Sequelize.INTEGER,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        unique:true
    }
}
);
module.exports=user;