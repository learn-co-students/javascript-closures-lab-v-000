function bumpCounter () {
  let counter = 0

  function addBump () {
    counter += 1
  }

  function getBumps () {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal (animalType) {
  function deadlyDevice(device) {
    return { animalType: `${animalType}`, deadlyDevice: `${device}` }
  }
  return deadlyDevice
}

const sharkCreator = createAnimal('Shark')
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
const sharkWithFrickinCannon = sharkCreator('Cannon')
