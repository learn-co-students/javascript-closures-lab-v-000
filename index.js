const app = "I don't do much."

function bumpCounter(){
  var counter = 0;

  function addBump(){
    counter+=1
  }

  function getBumps(){
    return counter
  }

   return {
    getBumps,
    addBump
  };
}

function createAnimal(animalType){
   return (deadlyDevice) => {
         var statement =  {
            'animalType': animalType,
            'deadlyDevice': deadlyDevice
           
         }
         return statement
    }
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinCannon = sharkCreator('Cannon')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')