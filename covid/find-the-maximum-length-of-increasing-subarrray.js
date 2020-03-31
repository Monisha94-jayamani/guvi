const readline=require('readline');
const imp=readline.createInterface({
   input:process.stdin 
});
var user=[];
imp.on("line",(data)=>{
   user.push(data)
 });
imp.on("close",()=>{
var a=user[0]
var b=user[1].split(" ");
var c=[];
console.log(a);
console.log(b);
for(var i=0;i<b.length;i++)
{
    if(parseInt(b[i])<parseInt(b[i+1]))
    {
        c.push([b[i],b[i+1]]);
    }
}
console.log(c);
var count=[]
var v=0;
for(var j=0;j<c.length;j++)
{
    var d=c[j].split(" ");
    for(var k=0;k<d.length;k++)
    {
        v+=1
    }
    count.push(v);
}
console.log(count);
});
