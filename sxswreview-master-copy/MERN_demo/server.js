const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

const mongoose = require("mongoose");

// strategy used to protect sensitive data
const keys = require("./config/keys");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log(`Connected to database`))
  .catch((error) => console.log("Cannot connect to DB"));

// Blueprints
const mernSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "First Name is required!"],
  },
});

const MernModel = mongoose.model("merns", mernSchema);

app.get("/test", (req, res) => res.json({ name: "JM", app: "MERN" }));

app.post("/new", (req, res) => {
  console.log("I made it to the back end post");
  console.log(req.body);
  MernModel.create(
    {
      ...req.body, // whatever we decide to be in the body, it will ALL be passed
    },
    (err, result)=>{
      let message = err ? err : result;
      res.json(message);
    }
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App on port ${PORT}`));
