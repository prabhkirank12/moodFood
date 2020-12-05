// Checks if we are running in production and pulls the keys from the relevant
// path
module.exports = (
    process.env.NODE_ENV === "production" ? 
    require('./keys_prod') : 
    require("./keys_dev")
)