import { listProducts } from "../models/products/product.helper";
import productsController from "./productsController";

const homeController = {
    getHomePage: async (req, res) => {
        res.render("dashboard.ejs");
    },
    getGridData: async (req, res) => {
        const results = await productsController.getAllProducts();
        if (results) {
            res.json(listProducts(results));
        } else {
        }
    },
    postData: null,
};

export default homeController;
