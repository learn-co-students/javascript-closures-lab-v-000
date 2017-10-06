/* 
1. Create a function, bumpCounter(), that has a variable called counter.
2. bumpCounter() function has two inner functions: addBump() and getBumps(). 
3. These two functions need to be returned since they will be used to increase the counter and get the counter value.
4. addBump() function should increase the counter by 1.
5. getBumps() function should return the current count.
*/
function bumpCounter() {
  let counter = 0;
  
  function addBump() {
    counter++;
  }
  
  function getBumps() {
    return counter;
  }
  
  return {
    addBump,
    getBumps,
  };
}

/* 
1. Create a function, createAnimal(), that takes one parameter, animalType.
2. Create an inner function in this createAnimal() function that also has one parameter, deadlyDevice. 
3. This function then returns an object w/ two properties, animalType and deadlyDevice, the given arguments to both functions.
4. Create a variable, shark creator by calling createAnimal() with the 'Shark' string.
5. Add a variable called sharkWithFrickinLaserbeam that is a combination of a 'Shark' and 'Laserbeam'.
6. Add a variable called sharkWithFrickinCannon that is a combination of a 'Shark' and 'Cannon'.
*/
function createAnimal(animalType) {
  return function (deadlyDevice) {
    return { animalType, deadlyDevice };
  };
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');

console.log(sharkWithFrickinLaserbeam);
console.log(sharkWithFrickinCannon);
