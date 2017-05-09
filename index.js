function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter += 1;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(type) {
  function buildAnimal(deadlyDevice) {
    return {animalType: type, deadlyDevice: deadlyDevice}
  }

  return buildAnimal;
}

var sharkCreator = createAnimal("Shark");

var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
