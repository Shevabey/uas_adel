import User from "./models/User.js";
import Transaction from "./models/Transaction.js";
import IncomeReport from "./models/IncomeReport.js";
import Vendor from "./models/Vendor.js";
import Manager from "./models/Manager.js";

// Relasi
User.hasMany(Transaction, { foreignKey: "id_user" });
Transaction.belongsTo(User, { foreignKey: "id_user" });

Manager.hasMany(Transaction, { foreignKey: "id_user" });
Transaction.belongsTo(Manager, { foreignKey: "id_user" });

User.hasMany(IncomeReport, { foreignKey: "id_user" });
IncomeReport.belongsTo(User, { foreignKey: "id_user" });

Manager.hasMany(Vendor, { foreignKey: "id_user" });
Vendor.belongsTo(Manager, { foreignKey: "id_user" });
