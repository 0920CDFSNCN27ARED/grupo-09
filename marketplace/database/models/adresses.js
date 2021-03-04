'use strict';

module.exports = (sequelize, DataTypes) => {
  const Adresses = sequelize.define('Adresses', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    floor: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  Adresses.associate = function (models) {
    Adresses.belongsTo(models.Customers, {
      as: 'customers',
      foreignKey: 'customer_id',
    });

    Adresses.hasMany(models.ShoppingCarts, {
      as: 'shopping_carts_billing',
      foreignKey: 'billing_address_id',
    });

    Adresses.hasMany(models.ShoppingCarts, {
      as: 'shopping_carts_shipping',
      foreignKey: 'shipping_address_id',
    });
  };
  return Adresses;
};
