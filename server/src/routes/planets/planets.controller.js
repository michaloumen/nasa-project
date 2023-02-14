const { getAllPlanets } = require('../../models/planets.model');

//adding return to make sure the function stops executing
function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
};

//return as an obj to export multiple functions
module.exports = {
  httpGetAllPlanets
}
