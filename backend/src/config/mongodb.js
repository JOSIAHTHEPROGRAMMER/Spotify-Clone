import mongoose from "mongoose";

const connectDB = async () => {
  // Log when connection is established
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected...");
  });

  // Connect to the "spotify" database
  await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
};

export default connectDB;
