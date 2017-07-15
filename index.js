const app = "I don't do much."

function bumpCounter() {
  let counter = 0;

  function addBump(){
    counter++;
  }

  function getBumps(){
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


function debug() {
var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
sharkCreator();

debugger;

}
