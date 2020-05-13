const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{

  var a=user[0].split(" ");
  var N=parseInt(a[0]);
  var K=parseInt(a[1]);
  
  var b=user[1].split(" ");
 
  b.sort(function(c,d) {
         return c-d
         });
var c=[...new Set(b)]
var le=c.length;
if(le>=K)
{
  console.log(parseInt(c[K-1]));
}
else
{
    console.log("-1");
}
});
INPUT
5 2
1 1 2 4 5
OUTPUT
2
