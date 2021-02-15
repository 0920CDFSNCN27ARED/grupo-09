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

  return PaymentMethods;
};
