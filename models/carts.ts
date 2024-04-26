import { DataTypes, Sequelize } from "sequelize";
import db from "../db/connection";
import User from "./users";
import PorductsInCart from "./productsInCart";

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

Cart.hasMany(PorductsInCart, { foreignKey: "CartID" });

// Belongs To, for Users
PorductsInCart.belongsTo(Cart, { foreignKey: "CartID" });

export default Cart;
