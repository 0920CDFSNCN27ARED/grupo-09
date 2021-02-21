'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductsCategories = sequelize.define('ProductCategories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  
  return ProductsCategories;
};
