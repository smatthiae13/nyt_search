const express = require('express');
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb:")
.then(() => console.log(`Database connected successfully`))
.catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/api', routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

