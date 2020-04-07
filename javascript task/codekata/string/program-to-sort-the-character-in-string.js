const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0].split("");
  var b=a.sort();
  //console.log(b);
  var c=b.join("");
  console.log(c);
});
