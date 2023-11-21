import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to Mongoose Successfully");
      connection.on("error", (err) => {
        console.log("MongoDB connection error" + err);
        process.exit();
      });
    });
  } catch (err) {
    console.log("Something Gone Wrong!");
    console.log(err);
  }
}
