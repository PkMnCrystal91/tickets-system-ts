import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define("users", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_rol: {
    type: DataTypes.STRING,
    defaultValue: "Customer",
  },
});

export default User;
