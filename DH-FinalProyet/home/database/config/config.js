module.exports = {
  
  "development": {
    "username": "root",
    "password": null,
    "database": "nfts_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    //previene que sequelize agregue plural a los nombres de los modelos
    define: {
      freezeTableName: true
    },
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    define: {
      freezeTableName: true
    },
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    define: {
      freezeTableName: true
    },
  }
}
