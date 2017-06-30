const app = "I don't do much."

function bumpCounter(){
  var bumps = 0;
  function addBump(){
    bumps++;
  }
  function getBumps(){
    return bumps;
  }
  return {addBump, getBumps};
}

function createAnimal(animalType){
  return function(deadlyDevice){
    return {animalType, deadlyDevice};
  };
}

var sharkCreator = createAnimal.bind(null, 'Shark');
var sharkWithFrickinLaserbeam = sharkCreator()('Laserbeam');
var sharkWithFrickinCannon = sharkCreator()('Cannon');
