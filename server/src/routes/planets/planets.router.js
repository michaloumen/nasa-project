const express = require('express');
const { getAllPlanets } = require('./planets.controller');
//destructure the obj to use functions directly

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;