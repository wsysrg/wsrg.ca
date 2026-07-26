const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Vercel invokes the exported app as a serverless function; running the file
// directly (local dev, `npm start`) starts a listening server.
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`WSRG site running at http://localhost:${port}`);
  });
}

module.exports = app;
