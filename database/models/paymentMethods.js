'use strict';

module.exports = (sequelize, DataTypes) => {
  const PaymentMethods = sequelize.define('paymentMethods', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      name: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  PaymentMethods.associate = function (models) {
    PaymentMethods.hasMany(models.ShoppingCarts, {
      as: 'shopping_carts',
      foreingKey: 'payment_method_id',
    });
  };

  return PaymentMethods;
};
