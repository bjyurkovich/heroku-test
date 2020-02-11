const PORT = process.env.PORT || 9001;
const app = require("express")();

app.get("/hello", async (req, res) => {
  res.json({
    status: "ok"
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
