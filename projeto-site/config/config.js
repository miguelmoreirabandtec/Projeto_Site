module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: 'root',
    password: 'bandtec',
    database: 'SPFC',
    host: '0.0.0.0',
    dialect: 'mysql',
  
      
    },
    
  
};
 
