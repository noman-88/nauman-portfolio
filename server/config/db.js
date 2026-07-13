const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.log("⚠️ MongoDB URI not set. Skipping DB connection.");
    return;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error.message);
  }
};

module.exports = connectDB;
