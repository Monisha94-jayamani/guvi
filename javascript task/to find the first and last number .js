const readline=require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const userInput=[];
var str=""
inp.on("line",(data)=>{
  userInput.push(data)
});
inp.on("close",()=>{
    str=userInput[0].toString();
    c=str.split("");
    console.log("the first number",c[0]);
    console.log("the last number",c[1]);
    
    

});
