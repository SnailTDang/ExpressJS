import createPoolDatabase from "../config/connectDatabase";

let query = `INSERT INTO products (PRODUCT_NAME, PRODUCT_BRAND, PRODUCT_TYPE,
        PRODUCT_PRICE, PRODUCT_AMOUNT, PRODUCT_DISCOUNT, FREESHIP, RATING, PRODUCT_IMG, DEL_FLG)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const productsController = {
    createProduct: (req, res) => {
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
        } = req;
        try {
            createPoolDatabase.query(
                query,
                [
                    productName,
                    productBrand,
                    productType,
                    productPrice,
                    productAmount,
                    discount,
                    freeShip,
                    rating,
                    productImg,
                    0,
                ],
                function (error, results, fields) {
                    // res.render("success");
                    console.log(req.body);
                    console.log(query);
                    res.send('sucess');
                }
            );
        } catch (e) {
            console.log(e);
        }
    },
};

export default productsController;
