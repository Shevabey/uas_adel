import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/Database.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "DPSI Adel" });
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/customers", customerRoutes);
// app.use("/api/transactions", transactionRoutes);

// Database synchronization
db.sync()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
