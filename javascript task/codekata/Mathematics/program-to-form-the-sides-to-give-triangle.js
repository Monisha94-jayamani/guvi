const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var arr=m[0].split(" ");
  var a=parseInt(arr[0]),b=parseInt(arr[1]),c=parseInt(arr[2]);
  if(a+b<=c || b+c<=a || c+a<=b)
  {
    console.log("no");
  }
  else
  {
    console.log("yes");
  }
});
