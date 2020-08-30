//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const rows = (number) => {
  let newArray = [];
  var bigArray = [1];
  for(let i =0; i< number; i++){
    newArray[i] = bigArray; 
    bigArray = bigArray.concat([1]);
    if(Object.keys(newArray).length > 2){
      for(let j=1; j<Object.keys(newArray).length-1; j++){
        newArray[i][j] = newArray[i-1][j-1]+newArray[i-1][j];
      }
    }
  }
  return newArray;
};
