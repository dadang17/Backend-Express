import "reflect-metadata";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import App from "./app";
import dotEnv from "dotenv";
import modelInit from "./models";
import controllers from "./controllers";
import register from "@react-ssr/express/register";
import fs from "fs";
import path from "path";

dotEnv.config();

const { app } = new App({
  controllers: controllers,
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(),
    morgan("combined")
    // middleware baru
  ],
  actions: [modelInit, { action: register, type: "express-register" }]
});

const PORT = +(process.env.PORT || 4000);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[LISTEN] 🚀🚀🚀  starting http://localhost:${PORT}/api/v1`);
});