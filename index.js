const app = "I don't do much."

function bumpCounter() {
  var counter = 0
  function addBump(){
    counter = counter + 1
    return counter
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
  function inner(deadlyDevice){
    return { animalType:animalType, deadlyDevice:deadlyDevice }
  }
  return inner()
}
var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam
var sharkWithFrickinCannon
