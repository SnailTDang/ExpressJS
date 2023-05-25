import express from "express";
import productsController from "../../controllers/productsController";

const router = express.Router();

const productsRoutes = (app) => {
    router.post("/create-product", productsController.createProduct);
    return app.use("/", router);
};

export default productsRoutes;
