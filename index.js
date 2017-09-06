function bumpCounter(){
  var counter = 0

  function addBump(){
    counter += 1
  }

  function getBumps(){
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType){
  var animal = animalType
  function createAnimal(deadlyDevice){
    var newAnimal = { animalType: animal, deadlyDevice: deadlyDevice }
    return newAnimal
  }

  return createAnimal
}

var sharkCreator = createAnimal('Shark')

var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")

var sharkWithFrickinCannon = sharkCreator("Cannon")