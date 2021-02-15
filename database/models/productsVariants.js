'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductsVariants = sequelize.define('productVariants', {
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

  return ProductsVariants;
};
