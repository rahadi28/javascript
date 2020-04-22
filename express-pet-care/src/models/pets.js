'use strict';
module.exports = (sequelize, DataTypes) => {
  const pets = sequelize.define('pets', {
    petName: DataTypes.STRING,
    species: DataTypes.STRING,
    gender: DataTypes.BOOLEAN
  }, {});
  pets.associate = function(models) {
    // associations can be defined here
  };
  return pets;
};