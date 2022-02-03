let yourName = prompt("Adınız Nedir?");

let targetName = document.getElementById("myName");
targetName.innerHTML = yourName;

console.log(targetName.innerHTML);

let targetClock = document.getElementById("myClock");

let date = new Date().toDateString();

targetClock.innerHTML = date;