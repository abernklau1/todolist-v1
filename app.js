const express = require("express");
const https = require("https");
const date = require(`${__dirname}/date.js`);

const items = [];
const workItems = [];
const day = date.getDate();

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {

    res.render("list", {listTitle: day,
                        itemList: items});
});

app.post("/", function(req, res) {
    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }  
})

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", itemList: workItems});
});

app.get("/about", function(req, res) {
    res.render("about");
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on a port");
});

