import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./user.js";

const { DataTypes } = Sequelize;

const Manager = db.define(
  "Manager",
  {
    id_manager: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
  }
);

// Define relation
User.hasOne(Manager, { foreignKey: "id_user" });
Manager.belongsTo(User, { foreignKey: "id_user" });

export default Manager;
