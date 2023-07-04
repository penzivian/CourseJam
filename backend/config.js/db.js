import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.brightGreen.bold);
  } catch (error) {
    console.log(`Unable to connect with MongoDB`.red.underline);
    console.log(`Error: ${error.message}`.red);
  }
};

export default connectDB;
