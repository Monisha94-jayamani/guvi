const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
  });
var user=[];
imp.on("line",(data)=> {
  user.push(data)
});
imp.on("close",()=>{
  var s=user[0];
  var v=[];
  for(var i=1;i<=s;i++)
  {
     var t=user[i].split("");
     var count=0;
     for(var j=0;j<t.length;j++)
     {
     if(t[j]=="a" ||t[j]=="e"||t[j]=="i"||t[j]=="o" ||t[j]=="u" ||
     t[j]=="A" ||t[j]=="E"||t[j]=="I"||t[j]=="O" ||t[j]=="U")
     {
         count+=1;
     }
    }
  v.push(count+t);
  }
console.log(v.sort());
var l=[];
for(var res=v.length-1;res<=0;res--)
{
 l.push(v[res]) ;  
}
console.log(l);
});
