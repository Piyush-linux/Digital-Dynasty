import app from "./app.js";
import connectToMongo from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 8080;

// let connectDB = async () => {};

// app.listen()

connectToMongo()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("+--| Error : ", err);
  });
