import { DataTypes } from "sequelize";
import db from "../db/connection";

const Ticket = db.define("tickets", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  cantidad_disponible: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

export default Ticket;
