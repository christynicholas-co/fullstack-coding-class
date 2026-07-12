const express = require("express")
const router = express.Router()
// *GET /cats
// Get a bunch of cats
router.get("/", (req, res) => {
  res.send("You got some cats")
})
// *GET /cats/:id
router.get("/:id", (req, res) => {
  let id = req.params.id
  res.send(`You got a cat with the id of ${id}`)
})
module.exports = router
// * params - more rigid
// /cats/:catid/home/:homeid
// * query params - more flexible
// /cats?catid=43&homeid=67&today=11_21_2021
