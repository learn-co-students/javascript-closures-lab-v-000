function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter ++;
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  };
}


/* * Create a function, `createAnimal()`, that takes one parameter, `animalType`.
* Create an inner function in this `createAnimal()` function that also has one parameter, `deadlyDevice`. This function
then returns an object that forms our diabolical creation. This object has two properties, `animalType` and `deadlyDevice`
that are the given arguments to both functions.
* An example of the output: `{ animalType: 'Monkey', deadlyDevice: 'Lightsaber' }`
* Create a shark creator function by calling `createAnimal()` with the `'Shark'` string. This should be assigned to a
variable called `sharkCreator`.
* Add a variable called `sharkWithFrickinLaserbeam` that is a combination of a `'Shark'` and `'Laserbeam'`.
* Add a variable called `sharkWithFrickinCannon` that is a combination of a `'Shark'` and `'Cannon'`.

Thanks to our ingenious engineering, we can create an infinite amount of sharks with various deadly contraptions
attached. Because we're using a closure that we partially apply, we can also do this for other animal species. Dr. Evil
will surely be pleased!
 */

 function createAnimal(animalType) {
   return function (deadlyDevice) {
     return { animalType, deadlyDevice };
   }
 }

var sharkCreator = createAnimal('Shark');

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');

var sharkWithFrickinCannon = sharkCreator('Cannon');
