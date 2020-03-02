#check sides form scalene tirangle

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
  var a=parseInt(A[0]),b=parseInt(A[1]),c=parseInt(A[2]);
  if(a+b<=c || b+c<=a || c+a<=b)
  {
    console.log("no");
  }
  else if(a==b==c)
  {
    console.log("no");
  }
  else if(a==b || b==c || c==a)
  {
    console.log("no");
  }
  else
  {
    console.log("yes")
  }
});
