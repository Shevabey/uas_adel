import Vendor from '../models/vendor.js';

// Get all vendors
export const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single vendor
export const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new vendor
export const createVendor = async (req, res) => {
  const { name, address, contact_info, id_user } = req.body;
  try {
    const newVendor = await Vendor.create({ name, address, contact_info, id_user });
    res.status(201).json(newVendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a vendor
export const updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
    const { name, address, contact_info } = req.body;
    await vendor.update({ name, address, contact_info });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a vendor
export const deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
    await vendor.destroy();
    res.json({ message: 'Vendor deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
