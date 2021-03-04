'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductsCategories = sequelize.define(
    'ProductCategories',
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
      tableName: 'product_categories',
      timestamps: false,
    }
  );

  ProductsCategories.associate = function (models) {
    ProductsCategories.hasMany(models.Products, {
      as: 'products',
      foreignKey: 'category_id',
    });
  };

  return ProductsCategories;
};
