const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var s=user[0].split("");
  var index=0;
  var n=0;
  for(var i=0;i<s.length;i++)
  {
    n+=s[i].codePointAt(index);
  }
  console.log(n);
});
