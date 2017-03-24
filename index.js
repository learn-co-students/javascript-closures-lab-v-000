const app = "I don't do much."

function bumpCounter(){
  var counter = 0;

  function addBump(){
    counter++;
  }

  function getBumps(){
    return counter;
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType){
  function createDeadlyDevice(deadlyDevice){
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
  return createDeadlyDevice;
}

// function sharkCreator(){
//    createAnimal('shark')
// }
// var sharkCreator = () => {
//    return createAnimal('shark')
// }

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
