const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Get all routes" });
});

router.get('/:id', (req, res) => {
    res.json({ message: "Get single routes" });
});

router.post('/', (req, res) => {
    res.json({ message: "post a route" });
});

router.delete('/:id', (req, res) => {
    res.json({ message: "delete a route" });
});

router.patch('/:id', (req, res) => {
    res.json({ message: "update a route" });
});

module.exports = router