const Gossip = require("../dataModels/gossipSchema");

const createGossip = async (req, res) => {
  try {
    const newGossip = new Gossip({
      id: req.body.id,
      content: req.body.content,
      author: req.body.author || "Anonymous",
      created_at: req.body.created_at || Date.now(),
    });
    await newGossip.save();
    res.status(201).json(newGossip);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to create gossip");
  }
};

const getGossips = async (req, res) => {
  try {
    const gossips = await Gossip.find();
    res.status(200).json(gossips);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to fetch gossips");
  }
};

const updateGossip = async (req, res) => {
  try {
    const gossip = await Gossip.findOneAndUpdate({
      id: req.params.id,
      content: req.body.content,
      new: true,
    });
    if (!gossip) {
      return res.status(404).json({ msg: "Gossip not found" });
    }

    res.status(200).json(gossip);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to update gossip");
  }
};

const deleteGossip = async (req, res) => {
  try {
    const deletedGossip = await Gossip.findOneAndDelete({ id: req.params.id });
    if (!deletedGossip) {
      return res.status(404).json({ error: "Gossip not found" });
    }
    res.status(200).json({ msg: "Gossip removed" });

  } catch (error) {
    res.status(500).json({ error: "Failed to delete gossip" });
  }
};

module.exports = { createGossip, getGossips, updateGossip, deleteGossip };