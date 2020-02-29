const readline=require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const userInput=[];
var a=[];
inp.on("line",(data)=>{
  userInput.push(data)
});
inp.on("close",()=>{
    factorial=1
     for(i=1;i<userInput;i++)
     {
       factorial = factorial*i;
       a.push(factorial);
     
     }
     var str=a.toString();
     console.log(str);

});
