const { planets } = require('../../models/planets.model');

//adding return to make sure the function stops executing
function getAllPlanets(req, res) {
  return res.status(200).json(planets)
};

//return as an obj to export multiple functions
module.exports = {
  getAllPlanets
}