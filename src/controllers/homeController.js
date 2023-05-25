import createPoolDatabase from "../config/connectDatabase";

let query = "select * from Users where DEL_FLG = ?";

const homeController = {
    getHomePage: (req, res) => {
        return res.render("homePage.ejs");
    },
    getData: (req, res) => {
        try {
            createPoolDatabase.query(query,[0] ,function (error, results, fields) {
                // res.render("success");
                res.json(results);
            });
        } catch (e) {
            console.log(e);
        }
    },
    postData: null,
};

export default homeController;
