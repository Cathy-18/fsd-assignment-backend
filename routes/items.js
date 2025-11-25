const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Add new item
router.post("/", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete item
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item Not Found" });
    }
    res.json({ message: "Item Deleted", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
