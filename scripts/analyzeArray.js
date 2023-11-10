function analyzeArray(array){
    return  {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length
    }
}

function average(array) { 
    return array.reduce((a, b) => a + b, 0) / array.length;
}

function min(array){
    return Math.min(...array);
}

function max(array) {
    return Math.max(...array);
}

 module.exports = analyzeArray;