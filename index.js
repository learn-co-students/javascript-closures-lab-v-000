const app = "I don't do much."

function bumpCounter()
{
  var counter=0;
  function addBump()
  {
       counter=counter+1;
  }

  function getBumps()
  {
      return counter;
  }


  return {
    addBump,
    getBumps
  }
}


function createAnimal(animalType)
{

    return  function (deadlyDevice)
      {
         return { animalType: animalType , deadlyDevice: deadlyDevice}  ;
      }

}


var sharkCreator=createAnimal('Shark');

var sharkWithFrickinLaserbeam={animalType:'Shark',deadlyDevice:'Laserbeam'};

var sharkWithFrickinCannon={animalType:'Shark',deadlyDevice:'Cannon'};
