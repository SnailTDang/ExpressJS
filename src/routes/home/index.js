import express from "express";
import homeController from "../../controllers/homeController";

let router = express.Router();

const homeRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/home", homeController.getData);
    return app.use("/", router);
};

export default homeRoutes;
