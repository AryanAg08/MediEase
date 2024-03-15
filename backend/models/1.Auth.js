const mongo = require("mongoose");

const Auth = new mongo.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

module.exports = mongo.model("1)Auth", Auth);