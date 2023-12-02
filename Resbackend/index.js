const express = require("express");
const cors = require("cors");
require("./db/config");
const Details = require("./db/Details");
const User = require("./db/user");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/singup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  let user = await User.findOne(req.body).select("-password");

  if (req.body.password && req.body.email) {
    if (user) {
      resp.send(user);
    } else {
      resp.send("user not found");
    }
  } else {
    resp.send("user not found");
  }
});
app.post("/adddetail", async (req, resp) => {
  let detail = new Details(req.body);
  let result = await detail.save();
  resp.send(result);
});
app.get("/details", async (req, resp) => {
  let details = await Details.find();
  // let result = await Details.find();
  if (details.length > 0) {
    resp.send(details);
  } else {
    resp.send({ result: "no product found" });
  }
});
app.delete("/details/:id", async (req, resp) => {
  let result = await Details.deleteOne({ _id: req.params.id });
  resp.send(result);
  // resp.send("working");
});
app.get("/details/:id", async (req, resp) => {
  let result = await Details.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "not Found" });
  }
});

app.put("/details/:id", async (req, resp) => {
  let result = await Details.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  if (result.nModified === 0) {
    resp.status(404).send("Document not found");
  } else {
    resp.send(result);
  }
});
app.get("/search/:key", async (req, resp) => {
  let result = await Details.find({
    $or: [
      { name: { $regex: req.params.key } },
      { rollno: { $regex: req.params.key } },
      { section: { $regex: req.params.key } },
      { branch: { $regex: req.params.key } },
      { mobile: { $regex: req.params.key } },
      { fathername: { $regex: req.params.key } },
      { address: { $regex: req.params.key } },
      { collagename: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
app.listen(5000);
