import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./modules/user/user.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "I am Here",
  });
});

app.listen(config.port, () => {
  console.log(`Mango Server is Running PORT: ${config.port}`);
});

async function server() {
  try {
    await mongoose.connect(`${config.database_url}`);
    console.log(`BangoDB database connected at port ${config.port}`);
  } catch (error) {
    console.error(`Server Error ${server}`);
  }
}
server();
