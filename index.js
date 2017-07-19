const app = "I don't do much."

// bumpCounter function with closures
function bumpCounter() {
  var counter = 0;

  function addBump(){
    counter += 1;
  }

  function getBumps(){
    return counter;
  }

  return {
    addBump,
    getBumps
  }
}

// How to OBJECT DESTRUCTURE
// const{addBump, getBumps} = bumpCounter()
// Then you can just call addBump() or getBumps()


// Dangerous Animals
function createAnimal(animalType){
  return function(deadlyDevice){
    return {animalType, deadlyDevice};
  }
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
