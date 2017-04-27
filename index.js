const app = "I don't do much."

function bumpCounter() {
    var counter = 0
    
    function addBump(){
        counter++
    }
    function getBumps(){
        return counter
    }
    return {
        addBump,
        getBumps
    };
}

function createAnimal(type){
    function deadlyDevice(device) {
        return { animalType: type, deadlyDevice: device};
    }
    return deadlyDevice;
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")
