const express = require('express');
const { httpGetAllPlanets } = require('./planets.controller');
//destructure the obj to use functions directly

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;