const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
       var c=0;
     var a=user[0].split("");
     for(var i=0;i<a.length;i++)
     {
       c+=Math.pow(parseInt(a[i]),i);
     }
     var res=parseInt(c);
    console.log(res);
});
       
