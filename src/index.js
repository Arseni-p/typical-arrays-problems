
exports.min = function min (array) {
    if (array && array.length > 0) {
        let currentArr = array[0];

        for (let i = 1; i < array.length; i++) {
          let checkArr = array[i];
          if (checkArr < currentArr) {
            currentArr = checkArr; 
          }
        }
        return currentArr;
      } else {
        return 0;
      }
}   

exports.max = function max (array) {
    if (array && array.length > 0) {
        let currentArr = array[0];

        for (let i = 1; i < array.length; i++) {
          let checkArr = array[i];
          if (checkArr > currentArr) {
            currentArr = checkArr; 
          }
        }
        return currentArr;
      } else {
        return 0;
      }
}


exports.avg = function avg (array) {
    let count = 0;
    
    if (array && array.length > 0) {
        let arrLength = array.length;
    
        for (let i = 0; i < array.length; i++) {
            count  += array[i];
      
          }
        return count / arrLength;
      } else {
          return 0
      }
}
