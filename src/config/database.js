module.exports = {
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'authtdd',
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true, 
    underscored: true,
    underscoredAll: true
  }
}