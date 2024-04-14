import { Sequelize } from 'sequelize';


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize({
    database: 'session',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

const sync = async () => {
    try {
        await sequelize.sync({force: true});
        console.log('All models were synchronized successfully.');
      } catch (error) {
        console.error('Unable to sync models:', error);
      }
}



export default { connect, sequelize, sync};