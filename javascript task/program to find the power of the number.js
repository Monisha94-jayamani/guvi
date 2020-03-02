const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
  var a=userInput[0].split(" ");
  var b=parseInt(a[0]);
  var v=parseInt(a[1]);
  var c=Math.pow(b,v);
console.log(c);
});
