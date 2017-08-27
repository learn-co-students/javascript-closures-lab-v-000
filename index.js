const app = "I don't do much."

function bumpCounter(counter) {
  var counter = 0
  function addBump(){
    return counter++
  }
  function getBumps() {
    return counter
  }
  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  return function(deadlyDevice) {
    return {
      createAnimal,
      deadlyDevice
    };
  }
}

function sharkCreator() {
  createAnimal('Shark')
}

var sharkWithFrickinLaserbeam = {animalType: 'Shark', deadlyDevice: 'Laserbeam'}

var sharkWithFrickinCannon =  {animalType: 'Shark', deadlyDevice: 'Cannon'}
