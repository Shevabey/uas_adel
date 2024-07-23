import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/Database.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import incomeReportRoutes from "./routes/incomeReportRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import managerRoutes from "./routes/managerRoutes.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "DPSI ADEL" });
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/transactions", transactionRoutes);
app.use("/api/income-reports", incomeReportRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/managers", managerRoutes);

// Database synchronization
db.sync()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
