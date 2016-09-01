'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    id:   {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    nome: {type: DataTypes.STRING(45), allowNull: false, unique: true}
  });
  return Category;
};