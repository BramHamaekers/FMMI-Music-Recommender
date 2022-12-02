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
    console.log("Server is now running on port", PORT);
});

/** Template on how to handle a request and return a message */
router.get("/ping", async (req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

/** Template on how to handle a request and return an htlm page */
router.get("/", async (req, res) => {
        res.sendFile(path.join(__dirname, '/../src/resources/html/test.html'));
});

router.get(/A|B/, async (req, res) => {
        res.sendFile(path.join(__dirname, '/../src/resources/html/main.html'));
})

/** Template on how to handle request for a script */
router.get("/scripts/test.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/test.js'));
});

/** Template on how to recieve data from the html webpage  and respond with a json*/
router.post('/',function(req,res){
    console.log(req.body);
    res.json({"Response": "Data recieved!"});
 });


/** add getter for storageScripts.js */
router.get("/scripts/storageScripts.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/storageScripts.js'));
});

/** add getter for timerScripts.js */
router.get("/scripts/timerScripts.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/timerScripts.js'));
});

/** get storage test page*/
router.get("/storageTest", async (req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/storageTest.html'));
});

/** get timer test page*/
router.get("/timerTest", async (req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/timerTest.html'));
});