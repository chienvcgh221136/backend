const iPhoneModel = require('../models/iPhoneModel');

// Get all iPhones, sorted by most recent first
const viewAlliPhones = async (req, res) => {
    try {
        const iphones = await iPhoneModel.find({}).sort({ _id: -1 });
        res.status(200).json(iphones);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a specific iPhone by ID
const viewiPhoneById = async (req, res) => {
    try {
        const iphone = await iPhoneModel.findById(req.params.id);
        if (!iphone) return res.status(404).json({ message: 'iPhone not found' });
        res.status(200).json(iphone);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new iPhone
const addNewiPhone = async (req, res) => {
    try {
        await iPhoneModel.create(req.body);
        res.status(201).json({ message: 'iPhone added successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Edit an existing iPhone by ID
const editiPhone = async (req, res) => {
    try {
        const iphone = await iPhoneModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!iphone) return res.status(404).json({ message: 'iPhone not found' });

        // Return the updated iPhone
        res.status(200).json({ message: 'iPhone updated successfully!', data: iphone });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a specific iPhone by ID
const deleteiPhone = async (req, res) => {
    try {
        const iphone = await iPhoneModel.findByIdAndDelete(req.params.id);
        if (!iphone) return res.status(404).json({ message: 'iPhone not found' });
        res.status(200).json({ message: 'iPhone deleted successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete all iPhones
const deleteAlliPhones = async (req, res) => {
    try {
        await iPhoneModel.deleteMany({});
        res.status(200).json({ message: 'All iPhones deleted successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Export controller functions
module.exports = {
    viewAlliPhones,
    viewiPhoneById,
    addNewiPhone,
    editiPhone,
    deleteiPhone,
    deleteAlliPhones
};
