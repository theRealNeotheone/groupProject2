module.exports = function(sequelize, DataTypes) {
  var Glossary = sequelize.define("glossary", {
    terminology: DataTypes.STRING,
    define: DataTypes.TEXT
  }, { freezeTableName: true, timestamps: false });
  return Glossary;
};
