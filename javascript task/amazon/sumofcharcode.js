const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
    user.push(data)
})
imp.on("close",()=>{
    var s=user[0];var sum=0;
 
 for(var i=0;i<s.length;i++)
 {
     var c=s.charCodeAt(i);
     sum+=c;
 }
 console.log(sum);
});
op
294
