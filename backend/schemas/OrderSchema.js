const {Schema} = require("mongoose");

const OrderSchema = new Schema ({
    name: String,
    qlt: Number,
    price: Number,
    mode: String,
});

module.exports = { OrderSchema };