//const app = "I don't do much."

function bumpCounter() {
  let counter = 0; 

  function addBump() {
    counter += 1; 
    return; 
  }

  function getBumps() {
    return counter;      
  }

  return { addBump, getBumps };   
}

function createAnimal(animalType) {
  return function(deadlyDevice) {
    return {animalType: animalType, deadlyDevice: deadlyDevice};  
  }
}

var sharkCreator = createAnimal('Shark'); 
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam'); 
var sharkWithFrickinCannon = sharkCreator('Cannon'); 
