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
      name: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      name: DataTypes.DATE,
      allowNull: false,
    },
    total: {
      name: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    qty: {
      name: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  ShoppingCarts.associate = function (models) {
    ShoppingCarts.belongsTo(models.PaymentMethods, {
      as: 'payment_method',
      foreingKey: 'payment_method_id',
    });

    ShoppingCarts.belongsTo(models.Adress, {
      as: 'billing_address',
      foreingKey: 'billing_address_id',
    });

    ShoppingCarts.belongsTo(models.Customers, {
      as: 'customers',
      foreingKey: 'customer_id',
    });

    ShoppingCarts.belongsTo(models.Adreses, {
      as: 'shipping_adresses',
      foreingKey: 'shipping_addreses_id',
    });

    ShoppingCarts.hasMany(models.Orders, {
      as: 'orders',
      foreingKey: 'cart_id',
    });
  };

  return ShoppingCarts;
};
