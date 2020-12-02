const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const moods = require("./routes/api/moods");
const bodyParser = require('body-parser');
const passport = require("passport");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);
app.use("/api/moods", moods);
app.listen(port, () => console.log(`Server is running on port ${port}`));