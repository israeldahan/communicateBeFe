import { Sequelize } from 'sequelize';


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize({
    database: 'session',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export default sequelize;