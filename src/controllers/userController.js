import createPoolDatabase from "../config/connectDatabase";

const userController = {
    getProfilePage: async (req, res) => {
        // const [results, fields] = await createPoolDatabase.query(queryGetAll, [
        //     0,
        // ]);
        // return results;
        res.render("profile.ejs");
    },
};

export default userController;
