import { DataTypes, Sequelize } from "sequelize";
import db from "../db/connection";
import ShoppingCart from "./ShoppingCart";

const Product = db.define("products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Product;
