import { DataTypes } from "sequelize";
import db from "../db/connection";
import User from "./users";

const Purchase = db.define("purchases", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  PurchaseDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  TotalAmount: {
    type: DataTypes.FLOAT,
  },
});

export default Purchase;
