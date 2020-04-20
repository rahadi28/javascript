import express from "express";
import dotenv from "dotenv";
import middleware from "./middlewares";
import router from "./routes";

/* load .env file */
dotenv.config();

const app = express();

/* use middleware */
app.use(middleware);
app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log(
    `${process.env.APP_NAME} listening on port ${process.env.APP_PORT}`
  );
});
