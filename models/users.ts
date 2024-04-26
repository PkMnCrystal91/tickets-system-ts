import { DataTypes, Sequelize } from "sequelize";
import db from "../db/connection";
import Purchase from "./purchases";
import ShoppingCart from "./ShoppingCart";

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

User.hasMany(Purchase, { foreignKey: "user_id" });
User.hasMany(ShoppingCart, { foreignKey: "user_id" });

// Belongs To, for Users
Purchase.belongsTo(User, { foreignKey: "user_id" });
ShoppingCart.belongsTo(User, { foreignKey: "user_id" });

export default User;
