const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {counter++}
  function getBumps() {return counter}

  return{
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  return function(deadlyDevice) {
    return {animalType, deadlyDevice}
  }
}

  var sharkCreator = createAnimal("Shark")
  var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
  var sharkWithFrickinCannon = sharkCreator("Cannon")

  //Create a shark creator function by calling createAnimal() with the 'Shark' string. This should be assigned to a variable called sharkCreator.
  //dd a variable called sharkWithFrickinLaserbeam that is a combination of a 'Shark' and 'Laserbeam'.
  //Add a variable called sharkWithFrickinCannon that is a combination of a 'Shark' and 'Cannon'.
