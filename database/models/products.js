'use strict';

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
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
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    qty_sales: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  Products.associate = function (models) {
    Products.belongsTo(models.Category, {
      as: 'category',
      foreingKey: 'category_id',
    });
  };
  Products.associate = function (models) {
    Products.belongsTo(models.Variant, {
      as: 'variant',
      foreingKey: 'variant_id',
    });
  };
  return Products;
};
