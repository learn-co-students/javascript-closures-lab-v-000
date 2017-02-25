function bumpCounter() {
  let counter = 0;

  function addBump(){
    counter++;
  }
  function getBumps(){
    return counter
  }

  return{
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  return function(deadlyDevice) {
    return { animalType, deadlyDevice };
  }
}

var sharkCreator= createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
// how does sharkCreator know 'Laserbeam' is deadlyDevice?
var sharkWithFrickinCannon = sharkCreator('Cannon');
