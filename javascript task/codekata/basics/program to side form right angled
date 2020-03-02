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
  var a=parseInt(A[0]);
  var b=parseInt(A[1]);
  var c=parseInt(A[2]);
  if(a**2+b**2==c**2)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
  
