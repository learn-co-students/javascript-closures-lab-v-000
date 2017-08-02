const app = "I don't do much."

function bumpCounter() {
  var counter = 0;
  function addBump() {
    counter++;
  };
  function getBumps() {
    return counter;
  };

  return {addBump, getBumps};
}

function createAnimal(animalType) {
  function deadlify(deadlyDevice) {
    var deadlyAnimal = {animalType: `${animalType}`, deadlyDevice: `${deadlyDevice}` }
    return deadlyAnimal
  }
  return deadlify;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
