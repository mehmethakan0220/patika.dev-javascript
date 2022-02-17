const value = process.argv[2];

function getCircleArea(r){
    return Math.PI * Math.pow(r,2);
}

console.log(getCircleArea(value));