const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load .env before anything else

const { mongoURI } = require("./config/keys");

const PORT = 8000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());

// Routes
const bookRoute = require("./routes/BookRoute");
const CategoryRoute = require("./routes/CategoryRoute");
const usersRoute = require("./routes/UserRoute");
const reviewRoute = require("./routes/ReviewRoute");
const cartRoute = require("./routes/CartRoute");
const orderRoute = require("./routes/OrderRoute");

app.use(bookRoute);
app.use(CategoryRoute);
app.use("/api/users", usersRoute);
app.use(reviewRoute);
app.use("/cart", cartRoute);
app.use(orderRoute);

// Database Connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to Database");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
