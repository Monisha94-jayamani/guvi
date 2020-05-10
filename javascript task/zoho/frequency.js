
deebika kishore
7:37 PM (2 hours ago)
to me

const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
})
const user=[];
inp.on('line',(data)=>{
    user.push(data);
});
var n;
var l=[];
var da=[];
var r=[];
inp.on('close',()=>{
    n=parseInt(user[0]);
    l=user[1].split(" ");
    for(var i=0;i<l.length;i++)
    {  var c=0;
        var m=l[i];
        for(var j=0;j<l.length;j++)
        {
            if(parseInt(m)==parseInt(l[j]))
            {
                c++;
            }
        }
        r.push(c);
        da.push(m);
        m='';
    }
    console.log(r);
    console.log(da);
    var res=[];
    res=r.sort();
    console.log(res);
    var h=0;
    var k=[];
    for(var i=(r.length)-1;i>=0;i--)
    {  
        for(var j=0;j<res.length;j++)
         {
            if(parseInt(r[i])==parseInt(res[j]))
            {
                k.push(da[i]);
                //console.log(da[i]);
                break;
        }
         }
    }
   
    console.log(k.join(" "));
   
   
});
