const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
var n;
var a;
var s;
var res=0;
inp.on("line",(data)=>
{
user.push(data);
var n=user[0].split("");
var a=parseInt(n[0]);
var b=parseInt(n[n.length-1])
var res=a+b;
  console.log(res);


});
