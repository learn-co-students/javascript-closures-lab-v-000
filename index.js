const app = "I don't do much."
function bumpCounter() {
  var counter = 0;
  function addBump() {
    counter++;
  }
  function getBumps() {
    return counter;
  }
  return {addBump, getBumps};
}

function createAnimal(animalType) {
  function attachDevice(deadlyDevice) {
    return {animalType, deadlyDevice};
  }
  return attachDevice;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam');
var sharkWithFrickinCannon = createAnimal('Shark')('Cannon');
