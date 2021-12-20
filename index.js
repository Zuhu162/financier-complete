const express = require("express");
const mongoose = require("mongoose");

const app = express();
const user = require("./routes/users");
const auth = require("./routes/auth");

mongoose
  .connect(
    "mongodb+srv://<username>:<password>@cluster0.y5dad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(console.log("Connected to MONGODB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", user);
app.use("/api/auth", auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Connected to PORT: ${PORT}`);
});
