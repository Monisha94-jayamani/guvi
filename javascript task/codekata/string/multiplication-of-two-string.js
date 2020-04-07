const readline= require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
    
    user.push(data)
});
inp.on("close",()=>{
    var a=user[0].split(" ");
    var p=a[0]*a[1];
    console.log(p.toString());
    
});
