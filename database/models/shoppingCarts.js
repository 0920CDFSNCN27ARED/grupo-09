'use strict';

module.exports = (sequelize, DataTypes) => {
  const ShoppingCarts = sequelize.define('ShoppingCarts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    qty: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  ShoppingCarts.associate = function (models) {
    ShoppingCarts.belongsTo(models.PaymentMethods, {
      as: 'payment_method',
      foreignKey: 'payment_method_id',
    });

    ShoppingCarts.belongsTo(models.Adresses, {
      as: 'billing_address',
      foreignKey: 'billing_address_id',
    });

    ShoppingCarts.belongsTo(models.Customers, {
      as: 'customers',
      foreignKey: 'customer_id',
    });

    ShoppingCarts.belongsTo(models.Adresses, {
      as: 'shipping_adresses',
      foreignKey: 'shipping_addreses_id',
    });

    ShoppingCarts.hasMany(models.Orders, {
      as: 'orders',
      foreignKey: 'cart_id',
    });
  };

  return ShoppingCarts;
};
