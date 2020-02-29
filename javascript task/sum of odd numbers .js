const readline=require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const userInput=[];
var sum=0
inp.on("line",(data)=>{
  userInput.push(data)
});
inp.on("close",()=>{
for(i=1;i<=userInput[0];i++){
    if(i%2!=0){
        sum=sum+i;
    }
}
console.log(sum+"");
});
