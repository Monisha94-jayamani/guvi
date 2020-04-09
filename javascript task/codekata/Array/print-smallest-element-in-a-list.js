const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
  });
inp.on("close",()=>{
    var b=user[1].split(" ");
    var num=user[1].split(" ");
    //var original=num;
   
    num.sort(function(a,b){
        return a-b;
    });
 var s=num[0];
 console.log(s);
});
