'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductsVariants = sequelize.define('ProductVariants', {
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

  ProductsVariants.associate = function (models) {
    ProductsVariants.hasMany(models.Products, {
      as: 'products',
      foreingKey: 'variant_id',
    });
  };

  return ProductsVariants;
};
