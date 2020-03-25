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
//console.log("n:",n);
for(var i=0;i<n.length;i++)
{
    a=parseInt(n[i]);
   // console.log(typeof(a));
    s=Math.pow(a,2);
    //console.log(s);
   // console.log(typeof(s));
    res+=s;
    //console.log("res",res);
}
console.log(res);
});
