const express = require("express")
const router = express.Router()
const {getCats, getCat, createCat, deleteCat} = require("../controllers/catControllers")

// *GET /cats
// Get a bunch of cats
router.get("/", getCats)

// *GET /cats/:id
// Get one cat
router.get("/:id", getCat)

// *POST /cats
// Make on cat
router.post("/", createCat)

// *DELETE /cats/:id
// Make on cat
router.delete("/:id", deleteCat)

module.exports = router
// * params - more rigid
// /cats/:catid/home/:homeid
// * query params - more flexible
// /cats?catid=43&homeid=67&today=11_21_2021




