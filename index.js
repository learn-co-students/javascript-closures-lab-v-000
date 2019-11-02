import { normalize } from "path";

function bumpCounter(){
  let counter = 0
  function addBump(){
    return ++counter
  }

  function getBumps() {
    return counter
  }
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType){

  function addDeadlyDevice(deadlyDevice){
    return {animalType: animalType, deadlyDevice: deadlyDevice}
  }
  return addDeadlyDevice
}

function sharkCreator() {
  return createAnimal("Shark")
}


let sharkWithFrickinLaserbeam = {animalType:"Shark", deadlyDevice:"Laserbeam"}

const sharkWithFrickinCannon = normalShark("Cannon")