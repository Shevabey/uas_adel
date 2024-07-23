import IncomeReport from "../models/incomeReport.js";

// Get all income reports
export const getIncomeReports = async (req, res) => {
  try {
    const incomeReports = await IncomeReport.findAll();
    res.json(incomeReports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single income report
export const getIncomeReportById = async (req, res) => {
  try {
    const incomeReport = await IncomeReport.findByPk(req.params.id);
    if (!incomeReport)
      return res.status(404).json({ message: "Income report not found" });
    res.json(incomeReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new income report
export const createIncomeReport = async (req, res) => {
  const { report_date, total_income, id_user } = req.body;
  try {
    const newIncomeReport = await IncomeReport.create({
      report_date,
      total_income,
      id_user,
    });
    res.status(201).json(newIncomeReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an income report
export const updateIncomeReport = async (req, res) => {
  try {
    const incomeReport = await IncomeReport.findByPk(req.params.id);
    if (!incomeReport)
      return res.status(404).json({ message: "Income report not found" });
    const { report_date, total_income, id_user } = req.body;
    await incomeReport.update({ report_date, total_income, id_user });
    res.json(incomeReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an income report
export const deleteIncomeReport = async (req, res) => {
  try {
    const incomeReport = await IncomeReport.findByPk(req.params.id);
    if (!incomeReport)
      return res.status(404).json({ message: "Income report not found" });
    await incomeReport.destroy();
    res.json({ message: "Income report deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
