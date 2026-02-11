//Defines the API route for converting the hex color codes to RGB.
//Also handles HTTP requests and responses.
const express = require("express");
const hexToRgb = require("../utils/hex_to_rgb");

const router = express.Router();

//GET /api/hex-to-rgb?hex=FF0000
//Converts a hex color code to RGB and returns the result as JSON.

router.get("/hex-to-rgb", (req, res) => {
    try {
        const { hex } = req.query;
        const rgb = hexToRgb(hex); 
        res.json({hex, rgb}); // Sends the successful response
    } catch {
        res.status(400).json({error: "Invalid hex format..."}); //Returns the error
    }
});

module.exports = router;