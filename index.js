function bumpCounter() {
	let counter = 0;

	const addBump = () => { // arrow func
		counter += 1
	}

	function getBumps() {
		return counter
	}

	return {
		addBump,
		getBumps
	}
}

function createAnimal(animalType) {
	return function(deadlyDevice) {
		return { animalType, deadlyDevice }
	}
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
