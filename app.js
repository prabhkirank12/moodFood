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

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}
app.use("/api/users", users);
app.use("/api/moods", moods);
app.use("/api/third-party", thirdParty);
app.listen(port, () => console.log(`Server is running on port ${port}`));
