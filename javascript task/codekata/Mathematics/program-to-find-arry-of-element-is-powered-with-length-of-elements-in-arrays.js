const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var n=user[0].split("");
  var l=n.length;
  var c=0;
  for(var i=0;i<n.length;i++)
  {
    var s=Math.pow(parseInt(n[i]),l)
    //console.log(s);
    c+=s;
  }
  console.log(parseInt(c));
});
