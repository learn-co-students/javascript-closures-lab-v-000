function bumpCounter() {
  var counter = 0
  function addBump() {
    counter += 1
  }
  function getBumps(){
    return counter
  }
  return {
    addBump,
    getBumps
  };
}


function createAnimal(animalType) {
   function deployEvil(deadlyDevice) {
     return { animalType: animalType, deadlyDevice: deadlyDevice }
   };
   return deployEvil
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator("Cannon")
