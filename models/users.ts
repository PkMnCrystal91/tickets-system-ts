import { DataTypes, Sequelize } from "sequelize";
import db from "../db/connection";
import Purchase from "./purchases";

const User = db.define("users", {
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_rol: {
    type: DataTypes.STRING,
    defaultValue: "Customer",
  },
});

User.hasMany(Purchase, { foreignKey: "UserID" });
Purchase.belongsTo(User, { foreignKey: "UserID" });

export default User;
