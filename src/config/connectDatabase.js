// import { Sequelize } from "sequelize";
require("dotenv").config();
import mysql from "mysql2/promise";

const createPoolDatabase = mysql.createPool({
    host: process.env.HOST_NAME_DB,
    database: process.env.DB_NAME,
    user: "root",
    port: process.env.PORT_DB,
    debug: false,
    connectionLimit: 12,
});

// exports.executeQuery = function (query, callback) {
//     pool.getConnection(function (err, connection) {
//         if (err) {
//             connection.release();
//             throw err;
//         }
//         connection.query(query, function (err, rows) {
//             connection.release();
//             if (!err) {
//                 callback(null, { rows: rows });
//             }
//         });
//         connection.on("error", function (err) {
//             throw err;
//             return;
//         });
//     });
// };

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize("snailtdang", "root", null, {
//     host: "localhost",
//     dialect:
//         "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
// });

// const conectDatabase = async () => {
//     try {
//         //  sequelize.authenticate();
//         await createPoolDatabase.conect();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//     }
// };

export default createPoolDatabase;
