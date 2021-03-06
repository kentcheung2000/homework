const express = require("express");

const knex = require("../db/client");

const router = express.Router();

router.get("/", (req, res) => {
    // res.render('index');
    knex.select('*').from('cohorts')
        .then(data => {
            res.render("cohorts", {
                cohort: data
            });
        })


})

router.get("/index", (req, res) => {
    //res.render('index');
    knex.select('*').from('cohorts')
        .then(data => {
            res.render("cohorts", {
                cohort: data
            });
        })

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


router.get("/cohorts", (req, res) => {

    knex.select('*').from('cohorts')
        .then(data => {
            res.render("cohorts", {
                cohort: data
            });
        })

})

router.get("/:id", (req, res) => {

    knex("cohorts")
        .select("*")
        .where({
            id: req.params.id
        })
        .then((data) => {
            res.render("show", {
                cohort: data[0],
            })
        })
})







module.exports = router;