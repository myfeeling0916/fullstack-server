const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 5000;

require("./models/User"); // model
require("./services/passport");


// connect mongoDB
mongoose.connect(keys.mongoDB.mongoURI);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 day
        keys: [keys.web.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.listen(PORT);
