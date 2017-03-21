const app = "I don't do much."

function bumpCounter() {
  let counter = 0
  /*
  Use `let` instead of `var` because `counter` should only be scoped to `bumpCounter()`.
  Using `const` isn't an option either because `counter` needs to be updated
  and `const` variables cannot be updated.
  */
  function addBump(){
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
  function upgradeAnimal(deadlyDevice) {
    return { animalType: animalType, deadlyDevice: deadlyDevice }
  }

  return upgradeAnimal
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
