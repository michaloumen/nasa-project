const launchesDatabase = require('./launches.mongo');
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true
};

saveLaunch(launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId)
};

async function getAllLaunches() {
  return await launchesDatabase
  .find({}, { '_id': 0, '__v': 0 });
};

async function saveLaunch(launch) {
  await launchesDatabase.updateOne({
    // if this launch already exists in our database
    flightNumber: launch.flightNumber,
  }, launch, {
    upsert: true
  });
};

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      // data I want to keep static
      success: true,
      upcoming: true,
      customers: ['Zero to Mastery', 'NASA'],
      flightNumber: latestFlightNumber
    })
  );
};

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  // change fixed values to false
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
};

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById
};
