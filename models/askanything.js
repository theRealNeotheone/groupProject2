module.exports = function (sequelize, DataTypes) {
    var askanything = sequelize.define("askanything", {
        question: DataTypes.STRING,
        answer: DataTypes.TEXT,
    }, { freezeTableName: true, timestamps: false });
    return askanything;
};