const app = "I don't do much."


function bumpCounter() {

  let count = 0;

  function addBump() {
    count++
  }

  function getBumps() {
    return count
  }
  return { addBump, getBumps }
}


function createAnimal(animalType) {

  return function deadlyDevice(deadlyDevice) {
    return { animalType, deadlyDevice};
  }
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
