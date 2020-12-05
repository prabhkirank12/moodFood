const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const {moods} = require("./routes/api/moods");
const thirdParty = require("./routes/api/third-party");
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require('path');
const passportConfig = require("./config/passport");

// Connects mongoose to our database and console logs the result
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err)
);

// adds bodyParser middleware to simplify retrieving urlencoded and json
// requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Adds passport middleware that adds the user to any request
app.use(passport.initialize());
passportConfig(passport);

// Sets up paths for production environment if in production environment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        // gets file path to frontend index.html and sends it as a response
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

// Adds the routes to the app
app.use("/api/users", users);
app.use("/api/moods", moods);
app.use("/api/third-party", thirdParty);

// Opens the port
app.listen(port, () => console.log(`Server is running on port ${port}`));
