const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
  });
inp.on("close",()=>{
  var a=user.toString().split(" ");
var c=parseInt(a[0]);
  var d=parseInt(a[1]);
  var sum=c+d;
  if(sum%2==0)
      console.log("even");
  else
    console.log("odd");
   });
          
  
