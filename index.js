const app = "I don't do much."

function bumpCounter(n) {
  var counter = 0;
  function addBump() {
    return counter+=1
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  function machine(deadlyDevice) {
    return {animalType, deadlyDevice};
  }
  return machine;
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam')
var sharkWithFrickinCannon = createAnimal('Shark')('Cannon')
