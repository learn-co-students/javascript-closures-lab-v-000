const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
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
  return function (deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
}

var sharkCreator = createAnimal("shark")

var sharkWithFrickinLaserbeam = createAnimal("Shark")("Laserbeam")

var sharkWithFrickinCannon = createAnimal("Shark")("Cannon")
