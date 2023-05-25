import express from "express";
const path = require("path");
// require('dotenv').config()

let configViewEngine = (app) => {
    app.use(express.static(path.join(__dirname, "../puplic")));
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "../views"));
};

module.exports = configViewEngine;
