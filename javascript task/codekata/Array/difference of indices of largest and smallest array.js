const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
  });
inp.on("close",()=>{
    var b=user[1].split(" ");
    var num=user[1].split(" ");
    //var original=num;
   
    num.sort(function(a,b){
        return a-b;
    });
 

//console.log(b);
//console.log(num);
var s=num[0]
var index1,index2;
var l=num[num.length-1];
for(var i=0;i<b.length;i++)
{
    if(b[i]==s)
    {
         index1=i;
    }
}
for(var j=0;j<b.length;j++)
{
    if(b[j]==l)
    {
     index2=j;
    }
}
//console.log(index1);
//console.log(index2);
var res=index2-index1;
console.log(res);
});
