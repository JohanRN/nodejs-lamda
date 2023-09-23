const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("../config/environments");
const character = require("../routes/characterStarwars.route");
const compression = require("compression");
const helmet = require("helmet");
const app = express();
const swaggerUi = require('swagger-ui-express');
const { helperRoutes, generalError } = require("../helpers/routes.helper");
const swaggerSpec = require("../swagger/swagger");

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(character.routes);
app.use(helperRoutes);
app.use(generalError);

module.exports = app;
