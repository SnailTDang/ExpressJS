import express from "express";
import homeRoutes from "./home";
import productsRoutes from "./products";
import userRoutes from "./user";

// let router = express.Router();

const initWebRoutes = (app) => {
    homeRoutes(app);
    productsRoutes(app);
    userRoutes(app);
    // return app.use("/", router);
};

module.exports = initWebRoutes;
