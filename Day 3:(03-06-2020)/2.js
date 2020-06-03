//2.1 Anonymous function 
//2.1 odd numbers in a array
var number=[1,2,3,4,5,6,7,8,9,10]
var oddFunction
oddFunction = function () {
  var odd=number.filter(function(a){
      return a%2!==0
  })
console.log(odd)
};
oddFunction()



////2.1 Anonymous function 
//2.2 convert all the strings to title caps in a string array
var string=["ishwarya","guvi","geek"]
var capitalizeFunction
capitalizeFunction = function () {
  var newarray=string.map(function(a){
      var first=a[0].toUpperCase()+a.slice(1);
      return first
  })
console.log(newarray)
};
capitalizeFunction()

////2.1 Anonymous function 
//2.3 sum of all number in an array
var numbers=[1,2,3,5]
var sumFunction
sumFunction = function () {
  var total=numbers.reduce(function(t,a){
      
      return t+a
  })
console.log(total)
};
sumFunction()


//2.1 Anonymous function
 
//2.4 Return of all the prime numbers in an array

var numbers=[1,5,9,11,55];

var prime=function(){
 
var result=numbers.filter(function(a){
  
   var p=0;
    
 if(a>1)
   
  {
       
  for(var i=2;i<=a;i++)
     
    {
           
  if(a%i==0   &&    a!=i)
            
 {
              
   p=1
           
  }
       
  }
         
if(p==0)
        
 {
           
  return a;
        
 }
    
 }
 
})

console.log(result); 

};
prime()







/////2.1 Anonymous function 
//2.5 Return of all the palindromes in an array
var string1=["malayalam","guvi","mam"]
var palindromeFunction
palindromeFunction = function () {
  var palindromes=string1.filter(function(a){
      var b=a.split('').reverse().join('') 

      if(a==b)
      {
          return a;
      }
  }) 
      
 
console.log(palindromes)
};
palindromeFunction()


//2.1 Anonymous function 
//2.6 Return a median of two sorted array of same size

var arr1=[1,5,9,11,55];

var arr2=[3,6,8,9,8];

var medianOfArray=function(arr1,arr2){
 
if(arr1.length==arr2.length)
    
{
    
var res=arr1.concat(arr2)
   
 var first=res[res.length/2];
    
var second=res[res.length/2-1];
    
var median=(first+second)/2
    
console.log(parseInt(median));
    
}
   
 

 }



medianOfArray(arr1,arr2)



//2.1 Anonymous function 
//2.7 Removes duplicates from array
var arr=[1,2,5,4,5]
var duplicates=function(arr){
    var res=[...new Set(arr)];
    return res;
}

console.log(duplicates(arr));



//2.1 Anonymous function 
//2.8 Return an array by K times and return the rotated array
var arr=[1,2,3,4,5],k=3;
var rotated=function(arr,k){
    for(var i=0;i<k;i++)
    {
        var temp=arr.shift();
        arr.push(temp)
        
    }
    return arr
}

console.log(rotated(arr,k));
