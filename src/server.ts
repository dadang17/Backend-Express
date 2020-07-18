import app from "./app";
import { Express } from "express";
import { startModel } from "./models";
import { envConfig } from "./utils";

/**
 * Load port configution from environment variable
 */
const { PORT } = envConfig;

/**
 * port initization
 */
const port = +(PORT || 3000);

/**
 * Server start with listening the port
 */
const appStart = async (appExp: Express, port: number) => {
	await startModel();
	await appExp.listen(port, () => {
		console.log(`Server is ready receive the request on port ${port} 🚀🚀🚀`);
	});
};
appStart(app, port);
