const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { num1, num2 } = req.body;
  const result = parseInt(num1) + parseInt(num2);
  return res.json({ sum: result });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
