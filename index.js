const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss.js');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP("142.183.24.55", (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned coordinates:", coordinates);
});

fetchISSFlyOverTimes({ latitude: "43.653226", longitude: "-79.3831843" }, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("it worked! Returned flyover times:", passTimes);
});