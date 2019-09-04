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

// router.get("/:id", (req, res) => {

//     res.cookie('currentId', req.params.id)

//     knex("cohorts")
//         .select("*")
//         .where({
//             id: req.params.id
//         })
//         .then((data) => {

//             res.render("show", {

//                 cohort: data[0]
//             })
//         })
// })

router.get("/:id", (req, res) => {

    // let cohortId = req.cookies['currentId'];
    // let quantity = req.body.quantity;
    // // let assignmethod = req.body.assignmethod;
    // const assignmethod = req.query.assignmethod;

    let cohortId = req.params.id

    // res.render("result")

    console.log(cohortId)


    knex("cohorts")
        .select("*")
        .where({
            id: cohortId
        })
        .then((data) => {

            // const members = data[0]['members'].trim().split(',');

            // const assignmethod = req.query.assignmethod;


            // console.log("assign method: " + assignmethod);

            // console.log('members: ', members);
            // let mixedMembers = helpers.teamCount(members);

            // console.log(mixedMembers);



            // helpers.firstFunc(members);


            res.render("result", {
                cohort: data[0],
                id: cohortId
                // members
            })
            // console.dir("test members: " + members)
        })
})



module.exports = router;