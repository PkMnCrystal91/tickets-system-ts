import { DataTypes } from "sequelize";
import db from "../db/connection";

import Product from "./products";
import User from "./users";

const ShoppingCart = db.define("shoppingcarts", {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

// Belongs To Product
ShoppingCart.belongsTo(Product, { foreignKey: "product_id" });

export default ShoppingCart;
