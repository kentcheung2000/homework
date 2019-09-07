const express = require("express");
const knex = require("../db/client");
const router = express.Router();

const helpers = require('../helpers');


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
    let assignedmethod = '';

    const cohortId = req.params.id;
    assignmethod = req.query.assignmethod;
    const quantity = req.query.quantity;
    let newMembers = [];

    knex("cohorts")
        .select("*")
        .where({
            id: cohortId
        })
        .then((data) => {

            if (assignmethod == 'teamcount') {

                const members = data[0]['members'].trim().split(',');
                newMembers = helpers.teamCount(members, quantity);

            } else if (assignmethod == 'numberperteam') {

                const members = data[0]['members'].trim().split(',');
                newMembers = helpers.numberPerTeam(members, quantity);
            }

            // helpers.firstFunc(members);


            res.render("result", {
                cohort: data[0],
                id: cohortId,
                newMembers,
                assignmethod
            })

            //   <%- JSON.stringify(newMembers) %> 
            // console.dir("test members: " + members)
        })


})

router.delete("/:id", (req, res) => {
    knex("cohorts")
        .where({
            id: req.params.id
        })
        .delete()
        .then((data) => {
            res.redirect("/")
        })
})

router.get("/:id/edit", (req, res) => {
    knex("cohorts")
        .select("*")
        .where({
            id: req.params.id
        })
        .then((data) => {
            res.render("edit", {
                cohort: data[0]
            })
        })
})

router.patch("/:id", (req, res) => {
    const cohortParams = {
        logoUrl: req.body.logoUrl,
        name: req.body.name,
        members: req.body.members
    };
    knex("cohorts")
        .where({
            id: req.params.id
        })
        .update(cohortParams)
        .returning('id')
        .then((data) => {
            res.redirect(`/${data[0]}`);

        });
});



module.exports = router;