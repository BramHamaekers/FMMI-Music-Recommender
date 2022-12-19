import express, { Application } from "express";
import morgan from "morgan";
import * as path from 'path';
import PingController from "../src/controllers/ping";

const PORT = 3460;

/** Setup router to recieve requests */
const app: Application = express();
const router = express.Router();
app.use(express.static(path.join(__dirname, '/../src/resources/html')));
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

// Getters for the js scripts, these have to be before the html page getters
router.get("/scripts/genreSelectBuild.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/genreSelectBuild.js'));
});


router.get("/scripts/listSelectBuild.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/listSelectBuild.js'));
});


router.get("/scripts/recommendationsBuild.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/recommendationsBuild.js'));
});

router.get("/scripts/HomepageBuild.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/HomepageBuild.js'));
});

router.get("/scripts/spotify-web-api-js.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/spotify-web-api-js.js'));
});

/** add getter for storageScripts.js */
router.get("/scripts/storageScripts.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/storageScripts.js'));
});

router.get("/scripts/storageScriptsTest.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/storageScriptsTest.js'));
});

/** add getter for timerScripts.js */
router.get("/scripts/timerScriptsTest.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/timerScriptsTest.js'));
});


/** Template on how to handle a request and return an htlm page */
router.get("/", async (req, res) => {
        res.sendFile(path.join(__dirname, '/../src/resources/html/test.html'));
});

router.get(/A|B/, async (req, res) => {
        res.sendFile(path.join(__dirname, '/../src/resources/html/Homepage.html'));
})

router.get("/genreSelect", async (req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/Genre-select.html'));
})

router.get("/listSelect", async (req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/List-Select.html'));
})

router.get("/recommendations", async (req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/Recommendations.html'));
})

/** Template on how to handle request for a script */
router.get("/scripts/test.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/test.js'));
});

// /** Template on how to recieve data from the html webpage  and respond with a json*/
// router.post('/',function(req,res){
//     console.log(req.body);
//     res.json({"Response": "Data recieved!"});
// });

/** get storage test page*/
router.get("/storageTest", async (req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/storageTest.html'));
});

/** get timer test page*/
router.get("/timerTest", async (req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/timerTest.html'));
});




router.get("/questionnaire", async (_req, res) => {
        res.sendFile(path.join(__dirname, '/../src/resources/html/questionnaire.html'));
});

router.get("/answers", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/answers.html'));
});

router.get("/scripts/questionnaire.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/questionnaire.js'));
});

  
router.get("/scripts/answers.js", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/scripts/answers.js'));
});

router.get("/answers.json", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/answers.json'));
});

router.get("/vragen.json", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/vragen.json')); 
});   

router.get("/styles.css", async (_req, res) => {
    res.sendFile(path.join(__dirname, '/../src/resources/html/styles.css'));
});

router.post('/',function(req,res){
    console.log("Received message " + req.body["message"]);  
    var pathstr = String.raw`C:\Users\woutv\Documents\Unief\2e_Master\Semester1\HMI\Project\FMMI-Music-Recommender\src\resources\html\answers.json`;
    writeToJson(pathstr, req.body["message"]) 
    res.json({"Response": "Data recieved!"}); 
 }); 


 function writeToJson(path: string, data: any) 
 {
     let old_data: any = fs.readFileSync(path, "utf-8")
     if(old_data.length == 0)
     {
        fs.writeFileSync(path, "[" + JSON.stringify(data, null, 4) + "]")
        return
     }
     let json_obj: Data[] = JSON.parse(old_data) || [] // No longer need extra array; initialoze as an empty array if needed
     console.log(json_obj);

     json_obj.push(data)
     console.log(json_obj);  

     fs.writeFileSync(path, JSON.stringify(json_obj, null, 4))
 }

 interface Data { 
    "Q1":string,
    "Q2":string,
    "Q3":string,
    "Q4":string,
    "Q5":string,
    "Q6":string,
    "Q7":string,
    "Q8":string,
    "Q9":string,
    "Q10":string,
    "Q11":string,
    "Q12":string, 
    "Q13":string,
    "Q14":string,
  }
