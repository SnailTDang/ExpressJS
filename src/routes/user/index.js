import express from "express";
import userController from "../../controllers/userController";
const router = express.Router();

const userRoutes = (app) => {
    router.get(`/profile.html`, userController.getProfilePage);
    return app.use("/", router);
};

export default userRoutes;
