const mypowfunc=(array,callback)=>{
    var res=[];
    for(let i=0;i<array.length;i++)
    {
       res.push(callback(parseInt(array[i])))
    }
return res;
    
}
const mypow=(x)=> Math.pow(x,2)
const inp=[5,10,15]
console.log(mypowfunc(inp,mypow));
