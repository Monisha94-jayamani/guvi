const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
var user=[];
inp.on("line", (data) => {
     user.push(data);
  var a=user.toString().split(" ");
  var i;
  var s=[];
  var c;
  for(i=0;i<a.length;i++)
  {
      c=parseInt(a[i])
      s.push(c);
  }
  //console.log(a);
  //console.log(s);
  var res=Math.min(...s);
  console.log(res);
});
