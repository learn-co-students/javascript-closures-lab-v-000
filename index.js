const app = "I don't do much."

function bumpCounter() {
  var counter = 0;


  function addBump() {
    return counter++;
  }

  function getBumps() {
    return counter
  }



  return { addBump, getBumps }

}





function createAnimal(animalType) {
    function final(deadlyDevice) {
      return {animalType, deadlyDevice}
    }

    return final
};


var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam =  sharkCreator('Laserbeam')
var sharkWithFrickinCannon =  sharkCreator('Cannon')


// {sharkWithFrickinLaserbeam, sharkWithFrickinCannon}


//
// var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
// var sharkWithFrickinCannon = sharkCreator('Cannon')
