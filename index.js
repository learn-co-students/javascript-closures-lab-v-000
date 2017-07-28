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

// next exercise

function createAnimal(animalType) {
  
  return function (deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }

}

// partially applied closure
var sharkCreator = createAnimal("Shark")
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")