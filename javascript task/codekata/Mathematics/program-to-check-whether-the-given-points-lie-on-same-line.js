const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0].split(" ");
 var b=user[1].split(" ");
 var c=user[2].split(" ");
 var p1=parseInt(a[0]);
 var p2=parseInt(a[1]);
 var m1=parseInt(b[0]);
 var m2=parseInt(b[1]);
 var n1=parseInt(c[0]);
 var n2=parseInt(c[1]);
 if(p1==m1 && m1==n1 || p2==m2 && m2==n2 || p1==p2 && n1==n2 && m1==m2)
 {
     console.log("yes");
 }
 else
 {
     console.log("no");
 }
});
