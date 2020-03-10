const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
  var count=0;
  var s=user.toString().split("");
  var unique=[...new Set(s)];
 if(unique.length==2)
 {
     console.log("Saturated");
 }
 else
 {
     console.log("Unsaturated");
 }
});
