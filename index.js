function bumpCounter() {
  var counter =0;
  function addBump () {
    return counter += 1;
  };
  function getBumps () {
    return counter;
  }
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  function addDevice(deadlyDevice){
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
  return addDevice;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');