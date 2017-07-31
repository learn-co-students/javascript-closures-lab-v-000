const app = "I don't do much."

function bumpCounter() {
    var counter = 0;

    function addBump(num) {
        counter++;
    }
    function getBumps() {
        return counter;
    }

    return {
        addBump,
        getBumps
    }
}

function createAnimal(animalType) {
    var animal = function(deadlyDevice) {
        return {
            animalType: animalType,
            deadlyDevice: deadlyDevice
        }
    }
    return animal;
}

var sharkCreator = createAnimal('Shark')

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')

var sharkWithFrickinCannon = sharkCreator('Cannon')