var express = require("express");
var router = express.Router();
var request = require("sync-request");

/* GET home page. */
router.get("/", function (req, res, next) {
    //on importe les données
    var requete = request("GET", "https://jsonplaceholder.typicode.com/users");

    var users = JSON.parse(requete.body);
    // console.log(resultWS);
    res.render("index", { users });
});

/* GET message page. */
router.get("/messages", function (req, res, next) {
    //on importe les données
    var requete2 = request(
        "GET",
        "https://jsonplaceholder.typicode.com/posts?userId=" + req.query.id
    );
    //on créer une var avec le contenu
    var resultCom = JSON.parse(requete2.body);

    console.log(resultCom);
    res.render("messages", { resultCom });
});

module.exports = router;
