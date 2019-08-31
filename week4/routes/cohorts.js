const express = require("express");

const knex = require("../db/client");

const router = express.Router();

router.get("/", (req, res) => {
    res.render('index');
})

router.get("/index", (req, res) => {
    res.render('index');
})

router.get("/new", (req, res) => {
    res.render('new');
})


router.post("/new", (req, res) => {
    const chortParams = {
        logoUrl: req.body.logoUrl,
        name: req.body.name,
        members: req.body.members
    };


    knex("cohorts")
        .insert(chortParams)
        .returning("*")
        .then((data) => {
            // res.send(data)
            res.redirect("/new");
        });
});






module.exports = router;