const age = 18;
let price = 500;
const isLeader = false;

age <= 18 ? console.log("You can vote") : console.log("You can't vote");
price = isLeader === true ? 0 : price + 100;
console.log(price);
