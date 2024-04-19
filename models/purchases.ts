import { DataTypes } from "sequelize";
import User from "./users";
import Ticket from "./tickets";

import db from "../db/connection";

const Purchase = db.define("purchases", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  ticket_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ticket,
      key: "id",
    },
  },
  cantidad: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  fecha_de_compra: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Purchase.belongsTo(User, { foreignKey: "user_id" });
Purchase.belongsTo(Ticket, { foreignKey: "ticket_type_id" });

export default Purchase;
