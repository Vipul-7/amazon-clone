import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING_TEST_API;

let cachedDb = null;

export const connectToDatabase = async () => {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    if (!MONGODB_URI) { 
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
      );
    }
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    cachedDb = db;
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
