#check product is perfect square

const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A=m[0].split(" ");
  var b=parseInt(A[0]);
  var c=parseInt(A[1]);
  var div=parseInt((b*c)/b);
  if(div===b)
  {
    console.log("yes");
  }
  else
  {
    console.log("no")
  }
});
