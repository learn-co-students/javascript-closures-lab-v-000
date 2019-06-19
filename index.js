const app = "I don't do much."
function bumpCounter(){
  let counter = 0;
  function addBump(){
    counter++;
  }
  function getBumps(){
    return counter
  }
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType){
   function innerFunction(deadlyDevice){
     return {
       animalType: animalType,
       deadlyDevice: deadlyDevice
     }
   }
   return {
     innerFunction
   }
}

let sharkCreator = createAnimal('shark') 
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
let sharkWithFrickinCannon = sharkCreator('Cannon')
}
