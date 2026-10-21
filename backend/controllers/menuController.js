const Menu = require("../models/Menu");

// Get all menu items
const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find().sort({ category: 1, name: 1 });

    res.status(200).json({
      success: true,
      count: menuItems.length,
      data: menuItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu items",
      error: error.message,
    });
  }
};

// Add a menu item
const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, image, isAvailable } =
      req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, price and category are required",
      });
    }

    const menuItem = await Menu.create({
      name,
      description,
      price,
      category,
      image,
      isAvailable,
    });

    res.status(201).json({
      success: true,
      message: "Menu item created successfully",
      data: menuItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create menu item",
      error: error.message,
    });
  }
};

module.exports = {
  getMenuItems,
  createMenuItem,
};