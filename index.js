

function bumpCounter() {
	var counter = 0;

	function addBump() {
		counter = counter + 1;
	}

	function getBumps() {
		return counter;
	}

	return {
		addBump,
		getBumps
	};
}
	
function createAnimal(animalType) {
	function deadly(deadlyDevice) {
		return {
			animalType: animalType,
			deadlyDevice: deadlyDevice
		};
	}
	return deadly;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');