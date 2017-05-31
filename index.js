const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {
    return counter++
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animaltype) {
   function animalDevice(deadlydevice) {
     return { animalType: animaltype, deadlyDevice: deadlydevice}
   }

   return animalDevice
}



var sharkCreator = createAnimal('Shark')

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
