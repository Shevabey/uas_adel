import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define(
  "Transaction",
  {
    id_transaction: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("sale", "income"),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Transaction;
