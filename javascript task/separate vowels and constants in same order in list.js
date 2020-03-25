const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var userinput=[];
inp.on("line",(data)=>{
    userinput.push(data);
});
inp.on("close",()=>{
//console.log("user:",userinput);
var v="";
var c="";
var a=userinput[0].split("");
//console.log(a);
for(var i=0;i<a.length;i++)
{
if(a[i]=="a" ||a[i]=="e" ||a[i]=="i" ||a[i]=="o" ||a[i]=="u" ||a[i]=="A" ||a[i]=="E" ||a[i]=="I" ||a[i]=="O" ||a[i]=="U"   )
{
    v+=a[i];
    
}
else
{
    c+=a[i];
}
}
var result=""
result=v+c;
//console.log(v);
//console.log(c);
console.log(result);
});
