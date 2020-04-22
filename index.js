const express = require("express");
const port = 8000;
const db = require("./config/mongoose");

// initialising the app
const app = express();

// app properties for setting up the view engine and views directory
app.set("view engine", "ejs");
app.set("views", "./views");

// middleware to handle form data
app.use(express.urlencoded());
app.use(express.static('./assets'));

// adding routers
app.use("/", require("./routers/index"));

app.listen(port, err => {
    if (err) console.error(`Error running the server: ${err}`);
    console.log(`Server is running at port: ${port}`);
});