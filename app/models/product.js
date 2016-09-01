'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    id:     {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    nome:   {type: DataTypes.STRING(45), allowNull: false, unique: true},
    preco:  {type: DataTypes.DECIMAL(8,2), allowNull: false}
  }, {
    classMethods: {
      associate: (models) => {
        
        Product.belongsTo(models.Category, {
          onDelete: "RESTRICT",
          foreignKey: {
            allowNull: false,
            name: 'categoria'
          }
        });
        
      }
    }
  });
  return Product;
};