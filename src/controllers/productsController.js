import createPoolDatabase from "../config/connectDatabase";
import { productDetailDto } from "../models/products/product.helper";

const queryGetAll = `CALL sp_get_all_products()`;

const queryCreate = `CALL sp_create_new_product(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const queryGetDetail = `CALL sp_get_detail_product(?)`;

const queryDelete = `UPDATE products_list SET DEL_FLG = 1 WHERE PRODUCT_ID = ?`;

class ProductsController {
    getDataTablePage = async (req, res) => {
        res.status(200).render("basic-table.ejs");
    };

    getAllProducts = async (req, res) => {
        try {
            const [results, fields] = await createPoolDatabase.query(
                queryGetAll
            );
            res.json(results[0]);
        } catch (error) {
            res.status(500).json(error);
        }
    };
    createProduct = async (req, res) => {
        const {
            productName,
            productBrand,
            productType,
            productPrice,
            productAmount,
            discount,
            freeShip,
            rating,
            productImg,
        } = req.body;
        const [results, fields] = await createPoolDatabase.query(queryCreate, [
            productName,
            productBrand,
            productType,
            productPrice,
            productAmount,
            discount,
            freeShip,
            rating,
            productImg,
        ]);
        res.json(results);
        // res.redirect("/");
    };
    getDetailProduct = async (req, res) => {
        const [results, fields] = await createPoolDatabase.query(
            queryGetDetail,
            [req.params.productID]
        );
        const product = results ? results[0][0] : {};
        res.status(200).json(product);
        // res.json(product);
    };
    deleteProduct = async (req, res) => {
        const [results, fields] = await createPoolDatabase.query(queryDelete, [
            req.body.productID,
        ]);
        res.json(results);
    };
}
const productsController = new ProductsController();
export default productsController;
