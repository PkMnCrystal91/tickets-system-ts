import { DataTypes } from "sequelize";
import db from "../db/connection";
import User from "./users";
import Cart from "./carts";

const Purchase = db.define("purchases", {
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  CartID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cart,
      key: "id",
    },
  },

  PurchaseDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  TotalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Purchase;
