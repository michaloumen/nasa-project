const {
  getAllLaunches,
  scheduleNewLaunch,
  existsLaunchWithId,
  abortLaunchById
} = require('../../models/launches.model');

async function httpGetAllLaunches(req, res) {
  return res.status(200).json(await getAllLaunches());
};

async function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission
    || !launch.rocket
    || !launch.launchDate
    || !launch.target
  ) {
    return res.status(400).json({
      error: 'Missing required launch property'
    });
  }
  // guarantees that now matter the date input is
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid launch date'
    });
  };
  await scheduleNewLaunch(launch);
  console.log(launch);
  return res.status(201).json(launch);
};

async function httpAbortLaunch(req, res) {
  // convert to number using +
  const launchId = +req.params.id;

  const existsLaunch = await existsLaunchWithId(launchId);
  if (!existsLaunch) {
    return res.status(404).json({
      error: 'Launch not found'
    });
  };
  const aborted = await abortLaunchById(launchId);
  if (!aborted) {
    return res.status(400).json({
      error: 'Launch not aborted',
    });
  }

  return res.status(200).json({
    ok: true,
  });
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
};
