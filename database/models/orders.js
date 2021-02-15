'use strict';

module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nqty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
      updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
      price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
});
  Orders.associate = function (models){
      Orders.belongsTo(models.Category,{
          as: "category",
          foreingKey: "category_id"
      });
    }
     Orders.associate = function (models) {
       Orders.belongsTo(models.Products, {
         as: 'products',
         foreingKey: 'products_id',
       });
     };
    return Orders;
}