const readline=require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const userInput=[];

inp.on("line",(data)=>{
  userInput.push(data)
});
var flag=false;
inp.on("close",()=>{
    if(userInput[0]%2==0){
        flag=true;
    }
    else
    {
        flag=false;
    }
    if(flag==false)
    {
        console.log("it is prime");
    }
    else{
        console.log("not a prime");
    }
});
