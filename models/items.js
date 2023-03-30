'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'id'})
    }
  }
  Items.init({
    id_item: DataTypes.INTEGER,
    id_pelanggan: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};