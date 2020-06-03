//3.callback function
//3.1 if the give number is even 
//2 is even
function even(a,check)
{
    var res=0
   if(check(a)==0)
   {
       return  "even"
   }
   else
   {
       return "not even"
   }
}
function checkCondition(a)
{
   res=a%2
  return res;
}

var res=even(3,checkCondition);
console.log(res)

////3.callback function
//3.2. if the given number is prime 

function prime(a,check)
{
    return check(a)
}
function checkCondition(a)
{
    var p=0
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
           
  return "prime";
        
 }
 else
 {
     return "not prime"
 }
    
     }




}
var res=prime(3,checkCondition)
console.log(res);



//3.callback function
//3.3. if the number is palindrome 
function palindrome(number,check)
{
    var  temp=number
   if(check(number)==temp)
   {
       return  "palindrome"
   }
   else
   {
       return "not palindrome"
   }
}
function checkCondition(number)
{
    var rem=0,final=0;
   while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
	
		return final
		
}

var res=palindrome(121,checkCondition);
console.log(res)

	

