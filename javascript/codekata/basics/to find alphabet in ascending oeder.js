var a="deepika";
var s=a.split("");
console.log(s);
for(var i=0;i<s.length;i++)
{
    for(var j=i+1;j<s.length;j++)
    {
        var t=a[i];
        s[i]=s[j];
        s[j]=t;
    }
}
console.log(s);
console.log(s.join(""));
