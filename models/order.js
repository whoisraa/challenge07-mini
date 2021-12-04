'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Product, {foreignKey: 'product_id'});
    }
  };
  Order.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    transaction_status: DataTypes.ENUM('WAITING', 'CANCELLED', 'DONE')
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};