//4 Arrow function 
//4.1 odd numbers in a array
var number=[1,2,3,4,5,6,7,8,9,10]
var oddFunction
oddFunction  =number.filter(a=>( a%2)!==0)
console.log(oddFunction)

////4 Arrow function 
//4.2 convert all the strings to title caps in a string array
var string=["ishwarya","guvi","geek"]
var capitalizeFunction
capitalizeFunction =string.map(a=>a[0].toUpperCase()+a.slice(1));
console.log(capitalizeFunction)


///4.1 Arrow function 
//4.3. Sum of all numbers in an array 
var numbers=[1,2,3,5]
var sumFunction
sumFunction = numbers.reduce((t,a)=>t+a);
  
console.log(sumFunction)

//////4 Arrow function 
//4.4. Return all the prime numbers in an array 
var numbers=[1,5,9,11,55];

var prime=()=>{
 
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




////4 Arrow function 
//4.5 Return all the palindromes in an array 
var string1=["malayalam","guvi","mam"]
var palindromeFunction=string1.filter(a=>(a.split('').reverse().join('')) ==a);

 
console.log(palindromeFunction)
