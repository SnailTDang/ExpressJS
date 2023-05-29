import express from "express";
import productsController from "../../controllers/productsController";

const router = express.Router();

const productsRoutes = (app) => {
    router.post("/create-product", productsController.createProduct);
    router.get(
        `/detail-product/:productID`,
        productsController.getDetailProduct
    );
    router.put(`/delete-product`, productsController.deleteProduct);
    router.get(`/data-table`, productsController.getDataTablePage);
    router.get(`/products`, productsController.getAllProducts);

    return app.use("/", router);
};

export default productsRoutes;
