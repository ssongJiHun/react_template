module.exports = (sequelize, Sequelize) => {
    const account = sequelize.define("account", {
        idx: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING(1000),
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(2000),
            allowNull: false,
        },
        refreshtoken: {
            type: Sequelize.STRING(2000),
        }
    },
    {
      charset: 'euckr',
      collate: 'euckr_bin',
      timestamps: false,
      tableName: 'account'
    });

    return account;
}