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
  };
  ShoppingCarts.associate = function (models) {
    ShoppingCarts.belongsTo(models.BillingAdress, {
      as: 'billing_address',
      foreingKey: 'billing_address_id',
    });
  };
  ShoppingCarts.associate = function (models) {
    ShoppingCarts.belongsTo(models.Customers, {
      as: 'customers',
      foreingKey: 'customer_id',
    });
  };
  ShoppingCarts.associate = function (models) {
    ShoppingCarts.belongsTo(models.Adreses, {
      as: 'adresses',
      foreingKey: 'shipping_addreses_id',
    });
  }
  return ShoppingCarts;
};
