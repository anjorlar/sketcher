require("dotenv").config()
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log(`listening on PORT ${PORT}`)
});
