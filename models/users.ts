import { DataTypes, Sequelize } from "sequelize";
import db from "../db/connection";
import Purchase from "./purchases";

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

User.hasMany(Purchase, { foreignKey: "user_id" });
Purchase.belongsTo(User, { foreignKey: "user_id" });

export default User;
