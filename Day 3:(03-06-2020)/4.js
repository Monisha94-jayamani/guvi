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
capitalizeFunction =  ()=> {
  var newarray=string.map(function(a){
      var first=a[0].toUpperCase()+a.slice(1);
      return first
  })
console.log(newarray)
};
capitalizeFunction()


////4.1 Arrow function 
//4.3. Sum of all numbers in an array 
var numbers=[1,2,3,5]
var sumFunction
sumFunction =  ()=>{
  var total=numbers.reduce(function(t,a){
      
      return t+a
  })
console.log(total)
};
sumFunction()

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
var palindromeFunction
palindromeFunction =  ()=> {
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
