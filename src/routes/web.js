import express from "express";
import homeRoutes from "./home";
import productsRoutes from "./products";

// let router = express.Router();

const initWebRoutes = (app) => {
    homeRoutes(app);
    productsRoutes(app);
    // return app.use("/", router);
};

module.exports = initWebRoutes;
