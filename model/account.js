const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    userName: String,
    password: String,
},{
    collection: 'accounts'
});

const authors = new Schema({
    nameAthor: String,
    job: String
})
const authorsModel = mongoose.model('author',authors);
const accountModel = mongoose.model('accounts',accountSchema);


module.exports = accountModel;
// module.exports = authorsModel;


