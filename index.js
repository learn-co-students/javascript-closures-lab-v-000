const bumpCounter = () => {
  let counter = 0;

  const addBump = () => {
    counter++;
  };

  const getBumps = () => {
    return counter;
  };

  return {
    addBump,
    getBumps
  };
};

const createAnimal = (animalType) => {
  return (deadlyDevice) => {
    return {
      animalType,
      deadlyDevice
    };
  };
};

const sharkCreator = createAnimal('Shark');
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
const sharkWithFrickinCannon = sharkCreator('Cannon');
