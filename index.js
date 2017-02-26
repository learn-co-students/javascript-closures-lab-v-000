const app = "I don't do much."

/* "scripts": {
  "test": "mocha --timeout 5000 -R mocha-multi --reporter-options nyan=-,json=.results.json"
}, */

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
    return { animalType, deadlyDevice };
  }
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
