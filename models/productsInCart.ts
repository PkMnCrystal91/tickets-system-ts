import { DataTypes } from "sequelize";
import db from "../db/connection";
import Cart from "./carts";
import Product from "./products";

const PorductsInCart = db.define("productsincart", {
  CartID: {
    type: DataTypes.INTEGER,
    references: {
      model: Cart,
      key: "id",
    },
  },
  ProductID: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default PorductsInCart;
