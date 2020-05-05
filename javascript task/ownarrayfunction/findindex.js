const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
inp.on('close',()=>{
    var a=[];
    var l=[];
    a=n[0].split(" ");
    var b=parseInt(n[1]);
    function findindex1(){
    for(var i=0;i<a.length;i++)
    {
        if(parseInt(a[i])==b)
        {
           return i;
        }
        
    }
    }
    var res=findindex1();
    console.log(res);
    
});
    //output
    inp:2 4 1
2
output:0
    
    
