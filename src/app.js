//Creates and configures the Express application.
const express = require("express");
const cors = require("cors");
const hexRoutes = require("./routes/utils/hex");

const app = express();
//Register API routes under /api
app.use(cors());
app.use("/api", hexRoutes);

//Export the app so it can be used by tests and server.js
module.exports = app;