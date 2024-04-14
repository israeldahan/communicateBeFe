import sequelize from "./connector.js";
import User from "./models/user-model.js";

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



export default { connect, sequelize, sync, User};