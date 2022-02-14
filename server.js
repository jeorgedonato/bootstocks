// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const exphbs = require('express-handlebars')
const { createProxyMiddleware } = require('http-proxy-middleware');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");
// app.use(morgan('dev'));

//Setting the handlebars extension to .hbs
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', '.hbs');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// app.get("*", function(req, res) {
//     if (req.originalUrl === "/") res.render("index");
//     else res.render(req.originalUrl.slice(1));
// });

// Controllers
// =============================================================

require("./controller/authController")(app);
require("./controller/usersController")(app);
require("./controller/stocksController")(app);
require("./controller/categoriesController")(app);
require("./controller/htmlController")(app);

app.use('/api/stocks/tiingo/**', createProxyMiddleware({ target: 'https://api.tiingo.com', changeOrigin: true }));

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false , alter : true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
 