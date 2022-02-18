

function getRandomRadius(){
    return Math.round(Math.random()*10);
}

function calcArea(radius){
    console.log(`the radius =${radius}`);
    return Math.PI * Math.pow(radius,2);
}

module.exports ={
    getRandomRadius,
    calcArea
}