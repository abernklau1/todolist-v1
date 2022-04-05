const express = require("express");
const https = require("https");

let items = [];

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);;
    res.render("list", {kindOfDay: day,
                        itemList: items});

});

app.post("/", function(req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on a port");
});

