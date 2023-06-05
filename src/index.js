import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import cors from "cors";
// import conectDatabase from "./config/connectDatabase";

let HOST_NAME = process.env.HOST_NAME;
let port = process.env.PORT || 8080;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

// conectDatabase();

app.use(cors());

app.listen(port, HOST_NAME, () => {
    console.log(port);
    console.log("backend express is running");
});
