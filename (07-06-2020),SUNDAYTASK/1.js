//1-Chunk create an array of elements split into group of length of size

const chunk = function(array, size) {
  if (!array.length) {
    return [];
  }
  const first = array.slice(0, size);
  const remaining= array.slice(size);

  return [first, ...chunk(remaining, size)];
};

console.log(chunk([1,2,3,4], 2));
//2-compact array in Js without using for loop
var array = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,];

var filtered = array.filter(function (el) {
  return el != null && el!="" ;
});

console.log(filtered);



//3-flatconcat array in js without using for loop

var array1=[1]
var array2 = [array1,2,4,[2,3]];

array2 = array2.reduce(function(a, b){
     return a.concat(b);
});
console.log(array2)


////4.drop  a Array


var arr=[1,2,3]


var dropfunc=function(arr,size){
     
   
  return arr.slice(size)   
 
 
}


console.log(dropfunc([1,2,3],1))




//5. dropright a Array
////
var arr=[1,2,3]


var droprightfunc=function(arr,size){
  
  

       var res=arr.reverse()
   
    //console.log(res);
      
 return res.slice(size);
   
 
}



console.log(droprightfunc([1,2,3],2))

////6.drop right while

var arr=[1,2,3,4,5]

var dropRightWhile=arr.filter(function(a)
{
    
   
 return a%2!==0
    

})

console.log(dropRightWhile);



////7.lastindex 

var arr=[1,2,3,4,5],r=[]

function lastindex(arr)
{

var arr1=arr.filter(function(a)
{
  
      
 return a%2==0
});

var l=arr1.length

var i=arr1[l-1]


return arr.lastIndexOf(i)

   
 
   
}

console.log(lastindex(arr))




///8.fflatten
var arr1 = [1,[2,[3,[4]],5]];
function flatten(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

console.log(flatten(arr1));
//alternative
var arr1 = [1,[2,[3,[4]],5]];
function flatten(arr1) {
    var res=[]
    var s=arr1.map(function(a){
        var y=a.toString().split(",")
        y.map(function(b){
            res.push(parseInt(b))
        })
        
    });
    return res;
}
console.log(flatten(arr1))


//9.flattenDeep 
const arr = [1, [2, [3, [4]],5]];

function flatDeep(arr, d) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arr, 2));


////10.fromPairs

var arr=[["a",1],["b",2]];

var obj={};

function formpairs(arr)
{

var form=arr.map(function(a){
 
 
    var inside=a
  
  obj[inside[0]]=inside[1]
   
  
});

return obj

}

console.log(formpairs(arr));



