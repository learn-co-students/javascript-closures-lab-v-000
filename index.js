function bumpCounter(){
  const counter = 0 

  function addBump(){
    return counter += 1
  }

  function getBumps(){
    return counter 
  }

  return {
    addBump(),
    getBumps()
  }
}