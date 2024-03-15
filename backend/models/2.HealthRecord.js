const mongo = require("mongoose");

const Record = new mongo.Schema({
    id: {
        type: String,
        reqired: true,
    },
    Pname: {
        type: String,
        reqired: true
    },
    age: {
        type: Number,
        reqired: true
    },
    Date: {
        type: String,
        reqired: true
    },
    Time: {
        type: String,
        reqired: true
    },
    gender: {
        type: String,
        reqired: true
    },
    problems: {
        type: String,
        reqired: true
    },
    vitals: {
        type: [Object],
        required: true,
    },
    allergy: {
        type: String,
        required: false,
    },
    olddisease: {
        type: String,
        reqired: false,
    },
    Medics: {
        type: [Object],
        required: true,
    },
});

module.exports = mongo.model("2)Health-Record", Record);