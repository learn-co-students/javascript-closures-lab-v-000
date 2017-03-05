function bumpCounter() {
  let counter = 0

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

  return function device(deadlyDevice) {
    return {
      animalType,
      deadlyDevice
    }
  }

}

const sharkCreator = createAnimal('Shark')

const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
const sharkWithFrickinCannon = sharkCreator('Cannon')
