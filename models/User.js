import sequelize from "../config/connection";
import { Model, DataTypes } from sequelize;

//create our User model
class User extends Model {}

//define table columns and configuration
User.init(
    {
        //define the id column
        id: {
            //use the special Sequelize Datatypes object provide what type of data it is
            type: DataTypes.INTEGER,
            //this is the equivelant of SQLs NOTNULL option
            allowNull: false,
            //instruct that this is the primary key
            primaryKey: true,
            //turn on auto incrementation
            autoIncrement: true
        },
        //define the username Column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define the email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //there cannot be duplicated email values in this table
            unique: true,
            //if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        //define the password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
                validate: {
                    //this means that the password must at least be four characters long
                    len: [4]
            }
        }
    },
    {
        //TABLE CONFIGURATION OPTIONS GO HERE 

        //pass in our imported sequelize connection(the direct connection to our database)
        sequelize,
        //dont automatically create  createdAt/updatedAt timestamp fields
        timestamps: false,
        //dont pluralize name of the database tables
        freezeTableName: true,
        //use underscores instead of camel casing
        underscored: true,
        //make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

export default User;