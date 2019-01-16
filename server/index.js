import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

//Import Routes
import posts from "./routes/posts";

const app = express();
dotenv.config();

//Connect to mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Routes
app.use("/api/posts", posts);

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
