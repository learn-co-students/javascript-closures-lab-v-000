function bumpCounter(){
let counter = 0;
  
  function addBump() {
  counter += 1;
  }
  
  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  }
};

function createAnimal(animalType) {
  debugger
  function equip (deadlyDevice) {
    let nexus = {animalType: animalType, deadlyDevice: deadlyDevice}
    return nexus;
  }
  return equip;
}


let sharkCreator = createAnimal('Shark');
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
let sharkWithFrickinCannon = sharkCreator('Cannon');