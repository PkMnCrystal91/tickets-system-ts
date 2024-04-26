import { DataTypes, Sequelize } from "sequelize";
import db from "../db/connection";
import User from "./users";

const Cart = db.define("carts", {
  UserID: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Cart;
