var a="akshay";
//convert a String into Arrayusing split
var arr=a.split("");
//to print a Array
console.log(arr);
var count;
//to check the length of the string if it  is even
if(arr.length%2==0)
{
    //for loop to check from first letter
for(var i=0;i<arr.length/2;i++)
{
    //for loop to check from last letter
 for(var j=arr.length-1;j>=arr.length/2;j--)
 {
     if(a[i]==a[j])
     {
         count=1;
        
     }
     else
     {
         count=0;
         break;
     }
 }
 if(count==0)
 {
     console.log("not a palindrome");
 }
 break;
}
if(count==1)
{
    console.log("palindrome");
}

}

else
{
//if the length is not a even
for(var m=0;m<=arr.length/2;i++)
{
     for(var n=arr.length-1/2;n>=0;j--)
 {
     if(a[i]==a[j])
     {
         count=1;
         break;
     }
     else
     {
         count=0;
         break;
     }
 }
 if(count==0)
 {
     console.log("not a palindrome");
 }
 break;
}
if(count==1)
{
    console.log("palindrome");
}

}
