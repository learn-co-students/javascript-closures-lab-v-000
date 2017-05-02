const app = "I don't do much."

// austin powers how many bumps while driving

function bumpCounter() {
  var counter = 0; // define the counter variable

  function addBump() {
    counter +=1 // adds +1 to the counter
}
  function getBumps() {
    return counter // returns the current number
  }
  return { addBump, getBumps }; //important it is in this order so that it adds 1 first before getting the current count
}

// dr. evil exercise

function createAnimal(animalType) {
  return function(deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
