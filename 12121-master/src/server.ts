import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "StudyHub API"
  });
});

app.listen(5000, () => {
  console.log("Server running");
});