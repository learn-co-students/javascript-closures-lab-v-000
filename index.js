const app = "I don't do much."

var bumpCounter = () => {
  var counter = 0
  var addBump = () => counter += 1
  var getBumps = () => { return counter }

  return {
    addBump,
    getBumps
  }
}

var createAnimal = (animalType) => {
  return (deadlyDevice) => {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
