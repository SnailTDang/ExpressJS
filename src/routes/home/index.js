import express from "express";
import homeController from "../../controllers/homeController";

let router = express.Router();

const homeRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/dashboard", homeController.getHomePage);
    // router.get("/profile", homeController.getProfilePage);
    router.get("/grid-data", homeController.getGridData);
    // router.get("/products", (req, res) => {
    //     res.render("products/dataGrid.ejs");
    // });
    // router.get("/home", (req, res)=> );
    return app.use("/", router);
};

export default homeRoutes;
