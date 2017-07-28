const app = "I don't do much."

function bumpCounter() {
  var counter = 0

function addBump()  {
  return counter++ 
 }  

function getBumps() {
  return counter
}

return {
  addBump,
  getBumps
}

};

var threePointTurn = bumpCounter()


function createAnimal(animalType) {
  return function (deadlyDevice) {
     return { animalType, deadlyDevice }
  }
}

var dangerousAnimals = createAnimal()

var sharkCreator = createAnimal("Shark")

var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")

var sharkWithFrickinCannon = sharkCreator("Cannon")













