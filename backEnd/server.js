const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { DBConnection } = require("./config/db");
let restaurantData = require("./model/Shcema");

app.use(express.json());
app.use(cors());

let startMongoDb = async () => {
    DBConnection()
}

startMongoDb();


app.get("/", async (req, res) => {
    let data = await restaurantData.find({})
    res.json(data);
});

app.get("/:id", async (req, res) => {
    let id = req.params.id
    let data = await restaurantData.findOne({ id });
    res.json(data);
})

app.listen(port, (err) => {
    if (err) throw err;
    else (console.log(`server is running on port:${port}`));
});