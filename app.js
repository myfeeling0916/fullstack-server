const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

require("./models/User"); // model
require("./services/passport");
require("./routes/authRoutes")(app);

// connect mongoDB
mongoose.connect(keys.mongoDB.mongoURI);

app.listen(PORT);
