'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('Customers', {
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
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  Costumers.associate = function (models) {
    Costumers.hasMany(models.Adresses, {
      as: 'adresses',
      foreingKey: 'customer_id',
    });

    Costumers.hasMany(models.ShoppingCarts, {
      as: 'shopping_carts',
      foreingKey: 'customer_id',
    });
  };

  return Customers;
};
