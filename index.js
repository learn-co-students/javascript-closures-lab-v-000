const app = "I don't do much."
function bumpCounter() {
  var counter=0
  function addBump(){
    counter=counter+1

  }
  function getBumps(){
    return counter
  }
  return {addBump, getBumps}

}
function createAnimal(animalType){

  function createDeadly(deadlyDevice){
    return {animalType:animalType, deadlyDevice:deadlyDevice}
  }
  return createDeadly
}
var sharkCreator=createAnimal('Shark')

var sharkWithFrickinCannon=sharkCreator('Cannon')
var sharkWithFrickinLaserbeam=sharkCreator('Laserbeam')
