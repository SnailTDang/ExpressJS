import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
// import conectDatabase from "./config/connectDatabase";

let HOST_NAME = process.env.HOST_NAME;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

// conectDatabase();

let port = process.env.PORT || 8080;

app.listen(port, HOST_NAME, () => {
    console.log(port);
    console.log("backend express is running");
});
