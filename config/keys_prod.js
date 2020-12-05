// Pulls and exports keys from the Heroku environment. These are set on the
// Heroku website so they aren't hardcoded and visible
module.exports = {
    mongoURI: process.env.mongoURI,
    secretOrKey: process.env.secretOrKey,
    googleAPIKey: process.env.googleAPIKey,
    mapsAPIKey: process.env.mapsAPIKey,
}