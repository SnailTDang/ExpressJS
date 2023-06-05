import homeRoutes from "./home";
import productsRoutes from "./products";
import userRoutes from "./user";

const initWebRoutes = (app) => {
    homeRoutes(app);
    productsRoutes(app);
    userRoutes(app);
};

export default initWebRoutes;
