function bumpCounter() {
	var counter = 0;
	function addBump() {
		counter++;
	}

	function getBumps() {
		return counter;
	}

	return { addBump, getBumps };
}

function createAnimal(animalType) {
	return function dangerousAnimals(deadlyDevice) {
		return { animalType: animalType, deadlyDevice: deadlyDevice };
	}
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")