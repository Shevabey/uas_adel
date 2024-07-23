import Transaction from "../models/transaction.js";

// Get all transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single transaction
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new transaction
export const createTransaction = async (req, res) => {
  const { amount, date, type, id_user } = req.body;
  try {
    const newTransaction = await Transaction.create({
      amount,
      date,
      type,
      id_user,
    });
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a transaction
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    const { amount, date, type, id_user } = req.body;
    await transaction.update({ amount, date, type, id_user });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a transaction
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    await transaction.destroy();
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
