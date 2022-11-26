import express, { Application } from "express";
import * as path from 'path';
import PingController from "../src/controllers/ping";

const PORT = 3460;

/** could make use of routers to route express requests */
const application: Application = express();

/** Template on how to handle a request and return a message */
application.get("/ping", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

/** Template on how to handle a request and return an htlm page */
application.get("/", async (_req, res) => {
        res.sendFile(path.join(__dirname, '/../src/resources/index.html'));
});

/** Tell the application to start listining on port = PORT */
application.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
