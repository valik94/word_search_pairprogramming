const transpose = function (matrix){
let rowArr = [];
let resultArr = [];
if (matrix.length !== 0) {
// return matrix[0].map((_,colIndex) => matrix.map(row => row[colIndex]));    
for (let col = 0; col< matrix[0].length; col++){
    for (let row = 0; row< matrix.length; row++){
        rowArr.push(matrix[row][col]);
        //console.log(`rowArr is: `, rowArr)
    }
    resultArr.push(rowArr);
    //console.log("resultArr is: ", resultArr);
    rowArr=[];
        }
        return resultArr;
    }
return [];
}

const wordSearch = (letters, word) => { 
    const transposedMatrix = transpose(letters)
    //console.log("transposedmatrix is: ", transposedMatrix)
    const horizontalJoin = transposedMatrix.map(ls => ls.join(''));
    const verticalJoin = letters.map (vs => vs.join(''));
    //console.log(letters.length);
    if (letters.length === 0){
        return false;
    }
    for (l of horizontalJoin) {
        //console.log(`l is:`, l)
        if (l.includes(word)) return true
    }
    for (v of verticalJoin){
        //console.log(`v is:`, v)
        if (v.includes(word)) return true;
    }
    return false;
}

const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK');

  wordSearch([], 'FRANK');


module.exports = wordSearch