// Converts a hexadesimal color code into an RGB
const { parse } = require("path");

function hexToRgb(hex) {
  hex = hex.replace("#", "");

  if(!/[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex...");
  }
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16)
  };
}

module.exports = hexToRgb;
