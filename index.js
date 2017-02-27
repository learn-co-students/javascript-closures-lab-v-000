var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
 
function bumpCounter(){
  var counter = 0;
  function addBump(){
    counter+=1;
  }
  function getBumps(){
    return counter;
  }
  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType, size){
  function device(deadlyDevice){
    return { animalType: animalType, deadlyDevice: deadlyDevice};
  }
  return device;
}
