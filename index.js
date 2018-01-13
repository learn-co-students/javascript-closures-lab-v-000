const app = "I don't do much."

function bumpCounter() {
  var counter = 0
  function addBump() {
    counter++
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}
//this is a constructor function
function createAnimal(animalType) {
  function creation(deadlyDevice) {
    return {animalType, deadlyDevice}
  }
  return creation;
}

var sharkCreator = createAnimal("Shark")

var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")

var sharkWithFrickinCannon = sharkCreator("Cannon")
