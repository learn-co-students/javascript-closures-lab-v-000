// // function raspyDoorGuy() {
// //   const password = 'yarr'; // password is a local variable created by raspyDoorGuy()
// //
// //   function givePassword(givenPassword) { // givePassword() is an inner function, a closure
// //     if (givenPassword === password) { // givePassword() uses variable declared in the parent function
// //       console.log('Ye may enter.');
// //     } else {
// //       console.log('Begone, landlubber!');
// //     }
// //   }
// //
// //   function willBreakPrinciples(bribeAmount) { // willBreakPrinciples() is the private method
// //     return bribeAmount >= 50;
// //   }
// //
// //   function bribe(amount) { // bribe() is an inner function, a closure
// //     if (willBreakPrinciples(amount)) { // bribe() uses private method created in the parent function
// //       return password; // bribe() uses variable declared in the parent function
// //     } else {
// //       console.log("Pssht. That won't work.");
// //     }
// //   }
// //
// //   return {
// //     givePassword,
// //     bribe
// //   };
// // }
//
//   // const { bribe } = raspyDoorGuy();
//   // bribe(80);
//   // // returns 'yarr'
//
// function bumpCounter() {
//   var counter = 0;
//
//   function addBump() {
//     counter++;
//   }
//   function getBumps() {
//     return counter;
//   }
//
//   return {
//     addBump,
//     getBumps
//   };
// }
//
// function createAnimal(animalType) {
//   function x(weapon) {
//     return {
//       animalType: animalType,
//       deadlyDevice: weapon
//     };
//   }
// }

function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter++;
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
  function animalDevice(deadlyDevice) {
    return { animalType: animalType, deadlyDevice: deadlyDevice };
  }

  return animalDevice;
}
var sharkCreator = createAnimal('Shark');

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
