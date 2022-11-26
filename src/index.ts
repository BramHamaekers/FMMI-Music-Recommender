import express, { Application } from "express";
import morgan from "morgan";
import * as path from 'path';
import PingController from "../src/controllers/ping";

const PORT = 3460;

/** Setup router to recieve requests */
const app: Application = express();
const router = express.Router();
app.use('/', router);

/** Debug router*/
router.use(morgan('tiny'))
router.use(express.json())



/** Tell the application to start listining on port = PORT */
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

/** Template on how to handle a request and return a message */
router.get("/ping", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

/** Template on how to handle a request and return an htlm page */
router.get("/", async (_req, res) => {
        res.sendFile(path.join(__dirname, '/../src/resources/html/main.html'));
});

/** Template on how to handle request for a script */
router.get("/scripts/main.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/main.js'));
});

/** Template on how to recieve data from the html webpage  and respond with a json*/
router.post('/',function(req,res){
    console.log(req.body);
    res.json({"Response": "Data recieved!"});
 });


