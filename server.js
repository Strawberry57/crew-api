const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Endpoint chính để mô phỏng Crew AI
app.post("/api/crew", (req, res) => {
  const { query } = req.body;
  res.json({
    message: `Phản hồi từ Crew AI cho câu hỏi: "${query}"`,
  });
});

app.get("/api/crew", (req, res) => {
  console.log(`crew api`);

  return res.json({ data: "123" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Crew AI Test Server chạy tại http://localhost:${PORT}`);
});
