const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A=m[0];
  var B=m[1].split(" ");
  console.log(parseInt(B[0]) & parseInt(B[1]) & parseInt(B[2]) & parseInt(B[3]));
});
