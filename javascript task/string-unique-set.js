const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
var count=0;
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
var b="";
//console.log(userInput);
var a=userInput[0].split("");
var unique=[...new Set(a)]; // Set(2) {1, 2}
b=unique.join("");
console.log(b);
});
