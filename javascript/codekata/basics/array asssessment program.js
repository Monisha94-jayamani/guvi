var a=[1,2,3,6,8,5,12,13]
var b=[];
for(var i=0;i<a.length;i++)
{
    for(var j=i+1;j<a.length;j++)
    {
        for(var k=j+1;k<a.length;k++)
        {
            if(parseInt(a[i])+parseInt(a[j])===parseInt(a[k]))
            {
                b.push(a[i],a[j],a[k])
                
            }
        }
       break;
    }
}
console.log(b);
let c=[...new Set(b)]
console.log(c);
