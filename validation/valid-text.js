// Makes sure the text is a string and not just whitespace/empty
const validText = str => {
    return typeof str === "string" && str.trim().length > 0;
}

module.exports = validText;