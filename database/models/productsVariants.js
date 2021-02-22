'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductsVariants = sequelize.define(
    'ProductVariants',
    {
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
    },
    {
      tableName: 'product_variants',
      timestamps: false,
    }
  );

  ProductsVariants.associate = function (models) {
    ProductsVariants.hasMany(models.Products, {
      as: 'products',
      foreignKey: 'variant_id',
    });
  };

  return ProductsVariants;
};
