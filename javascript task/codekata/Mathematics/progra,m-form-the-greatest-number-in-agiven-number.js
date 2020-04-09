const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0];
  //console.log(a);
  var b=a.toString().split("");
  //console.log(b);
  var c=b.sort();
  //console.log(c);
  var n="";
  for(var i=c.length-1;i>=0;i--)
  {
    //  console.log(c[i]);
    n+=c[i];
  }
  console.log(parseInt(n));
  });
