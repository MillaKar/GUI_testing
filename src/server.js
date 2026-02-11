//Starts the Express server and listens for incoming requests.
const app = require("./app");

//Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});