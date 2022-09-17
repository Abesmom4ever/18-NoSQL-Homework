const router = require("express").Router();
const { Thought } = require("../../models");

//route to get all thoughts
router.get("/", async (req, res) => {
    try {
        let thoughts = await Thought.find({});
        console.log(thoughts);
        res.status(200).json(thoughts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route to create new thoughts
router.post("/", async (req, res) => {
    try {
        let newThought = await Thought.create(req.body);
        console.log(newThought);
        res.status(200).json(newThought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
