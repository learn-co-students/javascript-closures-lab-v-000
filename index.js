const app = "I don't do much."

function bumpCounter(){
  let counter = 0;


    function getBumps(){
      return counter;
    }

    function addBump(){
      return counter++
    }

    return {
      getBumps,
      addBump
    };
}


  function createAnimal(animalType){
      return function (deadlyDevice){
        return {
          animalType,
          deadlyDevice
        };
      }
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
