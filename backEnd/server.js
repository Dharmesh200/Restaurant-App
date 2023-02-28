const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const apiData = require('./data.json');

app.use(cors());

app.get("/data", (req, res) => {
    res.send(apiData)
});

app.get("/restaurant/:id", (req, res) => {
    let restaurantData = apiData.filter(val => val.id == req.params.id)
    res.send(restaurantData)
})

app.listen(port, (err) => {
    if (err) throw err;
    else (console.log(`server is running on port:${port}`));
});