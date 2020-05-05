const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
var count=0;
inp.on('line',(data)=>{
  n.push(data);
});
inp.on('close',()=>{
    var k=[];
    var count=0;
    var l;
    k=n[0].split(" ");
    l=parseInt(n[1]);
    function every1()
    {
        for(var i=0;i<k.length;i++)
        {
            if(parseInt(k[i])%2==0)
            {
                count++;
            }
        }
        return count;
    }
    var d;
    d=every1();
    if(count==k.length)
    {
        console.log("True");
    }
    else
    {
        console.log("False");
    }
});
    //output
    2 4 6 
    all even so
    output ==is True
    
    
