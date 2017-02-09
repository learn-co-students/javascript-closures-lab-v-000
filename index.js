function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps,
  };
}

function createAnimal(animalType) {
  return function (deadlyDevice) {
    // debugger;
    return { animalType, deadlyDevice };
  }
}

var sharkCreator = createAnimal('Shark'); //returns a function
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam'); //returns an object
var sharkWithFrickinCannon = sharkCreator('Cannon'); //object
