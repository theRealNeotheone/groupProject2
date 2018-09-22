/*module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};*/




module.exports = function(sequelize, DataTypes) {
  var Glossary = sequelize.define("glossary", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Glossary;
};
