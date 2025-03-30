const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  const newItem = new Item(req.body);
  const saved = await newItem.save();
  res.json(saved);
});

// PUT (update)
router.put("/:id", async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
