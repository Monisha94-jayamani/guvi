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
for(i=1;i<=userInput[0];i++){
    if(i%2==0){
        a.push(i);
    }
}
console.log(a+"");
});
