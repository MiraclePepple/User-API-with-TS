 import { DataTypes } from "sequelize";
 import db from "../config/database";

 const User = db.define("User", {
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false,
     unique: true
   },
   password: {
     type: DataTypes.STRING,
     allowNull: false
   },
   profileImage: {
     type: DataTypes.STRING,
     allowNull: true
   }
 });

 export default User;
