'use strict';
/* los nombres de la variable suelen ser en Mayuscula no plural*/
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
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
      /* en caso de tener que definir el nombre de la tabla:
  lo defino aca como tableName: "nombretabla"*/
    },
    {
      timestamps: false,
    }
  );
  Products.associate = function (models) {
    Products.belongsTo(models.ProductCategories, {
      as: 'category',
      foreignKey: 'category_id',
    });

    Products.belongsTo(models.ProductVariants, {
      as: 'variant',
      foreignKey: 'variant_id',
    });

    Products.hasMany(models.Orders, {
      as: 'orders',
      foreignKey: 'product_id',
    });
  };

  return Products;
};
