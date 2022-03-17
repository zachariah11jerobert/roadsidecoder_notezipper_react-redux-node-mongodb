const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const { userRoutes } = require("./routes/userRoutes");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/notes", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server startted on PORT ${PORT}`));
