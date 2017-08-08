function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return { addBump, getBumps };
}

function createAnimal(animalType) {
  return function deadlyDevice(device) {
    return { animalType: animalType, deadlyDevice: device };
  }
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinCannon = sharkCreator("Cannon");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
