'use strict';

module.exports = (sequelize, DataTypes) => {
  const PaymentMethods = sequelize.define(
    'PaymentMethods',
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
      tableName: 'payment_methods',
      timestamps: false,
    }
  );

  PaymentMethods.associate = function (models) {
    PaymentMethods.hasMany(models.ShoppingCarts, {
      as: 'shopping_carts',
      foreignKey: 'payment_method_id',
    });
  };

  return PaymentMethods;
};
