const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin
});
const t=[];
inp.on('line',(data)=>{
    t.push(data);
});
var s;
var n=[];
var k;

inp.on('close',()=>{
    s=t[0];
    n=t[1].split(" ");
    k=n[0]
    for(var i=1;i<n.length;i++)
    {
        for(var j=i+1;j<n.length;j++)
    {
        if(n[i]<n[j])
        {
            k=n[i];
            n[i]=n[j];
            n[j]=k;
        }
    }
    }
    console.log(n[n.length-1]);
