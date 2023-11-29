const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        email: {
            type: String
        },
        displaypicture: {
            type: String
        },
    },
);
module.exports = mongoose.model('users', UserSchema);


