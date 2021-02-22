'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define(
    'Customers',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Customers.associate = function (models) {
    Customers.hasMany(models.Adresses, {
      as: 'adresses',
      foreignKey: 'customer_id',
    });

    Customers.hasMany(models.ShoppingCarts, {
      as: 'shopping_carts',
      foreignKey: 'customer_id',
    });
  };

  return Customers;
};
