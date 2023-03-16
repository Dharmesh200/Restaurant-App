const { Schema, model } = require("mongoose");

const RestaurantSchema = new Schema({
    id: Number,
    foodData: [
        {
            id: Number,
            rname: String,
            imgdata: String,
            address: String,
            delimg: String,
            somedata: String,
            price: Number,
            rating: String,
            arrimg: String,
            qnty: Number
        }
    ],
    rname: String,
    imgdata: String,
    address: String,
    delimg: String,
    somedata: String,
    price: String,
    rating: String,
    arrimg: String
}, { collection: 'restaurant' });

module.exports = model("restaurant", RestaurantSchema);