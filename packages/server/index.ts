import express from "express";

const app = express();
const port = 2974;

app.get("/api", (req, res) => {
  res.send("Hello from server again");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
