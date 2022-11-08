//import the Sequelize contructor from the library
import { Sequelize } from "sequelize";

require('dotenv').config();

//create connection to our database, pass in your mySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

export default sequelize;