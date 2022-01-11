const { DataTypes } = require('sequelize')

module.exports.users = (db) => {
  const model = {
    chatId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }

  const users = db.define('users', model, { tableName: 'users' })

  return users
}
