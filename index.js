function bumpCounter() {
  var counter = 0;

  function addBump() { return counter += 1; }

  function getBumps() { return counter; }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {

  function device(deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    };
  }

  return device;
}


var sharkCreator = createAnimal('Shark');

var sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam');

var sharkWithFrickinCannon = createAnimal('Shark')('Cannon');
