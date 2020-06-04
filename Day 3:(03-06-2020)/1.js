
//1.1.JavaScript Functions — Warmup Pbms


//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
//Input:addFive(5);addFive(0);addFive(-5);
//Output:10,5,-10
var num =10;
//addfive function
function addFive(num) { 
//checking number positive and negative and add -5 or +5.
   if(num>0)
   {
       return num+5;
   }
   else
   {
       return num+(-5);
   }

}
var result = addFive(num)
console.log(result);


//Write a function called “getOpposite”.
//Given a number, return its opposite
//Input:
//getOpposite(5);,getOpposite(0);,getOpposite(-5);,getOpposite(“5a”);
//getOpposite(5.5);
//Output:-5,0,5,-1,-1
var num = 5;
function getOpposite(num) {
    if(num>0)
    {
        return num*-1;
    }
    else if(num<0)
    {
        return (num*-1)
    }
   else  if(num==0)
   {
      return 0;
   }
    else
    {
        return "-1"
    }
}
var result = getOpposite(num)
console.log(result)



//Problem:
//Fill in your code that takes an number minutes and converts ittoseconds.
var min = 5;
function toSeconds(min) {
    return min*60
}
var secs = toSeconds(min)
console.log(secs);



//Problem
//Create a function that takes a string and returns it as an integer.
//Examples
//toInteger(“6”) ➞ 6
var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(myint);





//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//Examples nextNumber(0) ➞ 1
var myint = -3;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint)



//Create a function that takes an array and returns the first element.
//Examples
//getFirstElement([1, 2, 3]) ➞ 1
//getFirstElement([80, 5, 100]) ➞ 80
//getFirstElement([-500, 0, 50]) ➞ -500
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr.shift()
}
var data = getFirstElement(arr)
console.log(data);




//Problem
//Convert Hours into Seconds
//Write a function that converts hours into seconds.
//Examples
//hourToSeconds(2) ➞ 7200
//hourToSeconds(10) ➞ 36000
//hourToSeconds(24) ➞ 86400
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    var seconds=arr.map(function(a){
        console.log(a*60*60)
    })
}
hourToSeconds(arr)





//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.
//Examples
//findPerimeter(6, 7) ➞ 26
//findPerimeter(20, 10) ➞ 60
//findPerimeter(2, 9) ➞ 22
function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
var peri = findPerimeter(6,7)
console.log(peri)



//Problem
//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
//Examples
//lessThan100(22, 15) ➞ true
// 22 + 15 = 37
//lessThan100(83, 34) ➞ false
// 83 + 34 = 117
function lessThan100(num1,num2) {
    if(num1+num2>100)
    {
        return "false"
    }
    else
    {
        return "true"
    }
}
var res = lessThan100(83,34)
console.log(res);


//Problem
//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
//Examples
//remainder(1, 3) ➞ 1
//remainder(3, 4) ➞ 3
//remainder(-9, 45) ➞ -9
//remainder(5, 5) ➞ 0
function remainder(num1,num2) {
    return num1%num2
    
}
var res = remainder(1,3)
console.log(res);




//Problem
//Old macdonald had a farm:
//MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//turkey = 2 legs
//horse = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//Examples
//CountAnimals(2, 3, 5) ➞ 36
function CountAnimals(tur,horse,pigs) {
    return (tur*2)+(horse*4)+(pigs*4)
}
var legs = CountAnimals(2,3,5)
console.log(legs)





//Problem
//Frames Per Second
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//Examples
//frames(1, 1) ➞ 60
function frames(num1,num2) {
    return (num1*num2)*60
}
var fps = frames(10,25)
console.log(fps);




//Problem
//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
//Examples
//divisibleByFive(5) ➞ true
//divisibleByFive(-55) ➞ true
//divisibleByFive(37) ➞ false
function divisibleByFive(num1) {
    if(num1%5==0)
    {
        return "true"
    }
    else
    {
        return "false"
    }
}
var divisible = divisibleByFive(37);
console.log(divisible)



//Problem:
//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.

//Input:
//isEven(12);isEven(0);isEven(11);isEven(“11h”);
//Output:true

function isEven(num){
 if(num%2==0)
 {
     return "true"
 }
 else
 {
     return "false"
 }
}
var even = isEven(5)
console.log(even)




//Problem:
//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
//Input:areBothOdd(1, 3);
//output:true
function areBothOdd(num1, num2){
 if(num1%2==0 && num2%2==0)
 {
     return "false"
 }
 else
 {
     return "true"
 }
}
console.log(areBothOdd(1,3))



//Problem:
//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
//Input:
//getFullName(“GUVI”, “GEEK”);
//output:GUVI GEEK

function getFullName(firstName, lastName){
 // your code here
    return firstName+" "+lastName
}
var res=getFullName("GUVI","GEEK")
console.log(res);





//Problem:
//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.
//Input:
//getLengthOfWord(“GUVI”);
//output:4 
function getLengthOfWord(word1){
  if(typeof(word1)=="string")
  {
      return word1.length;
  }
  else
  {
      return "-1"
  }
}
console.log(getLengthOfWord(""))





//Problem:
//Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.
//Input:isSameLength(“GUVI”, “GEEK”);
//Output:true
function isSameLength(word1, word2){
 if(word1.length==word2.length)
 {
     return "true"
 }
 else
 {
     return "false"
 }
}
console.log(isSameLength("guvi","GEEK"))




//Problem:
//Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    var x=x2-x1; 
    var xaxis=Math.pow(x,2)
    var y=y2-y1;
    var yaxis=Math.pow(y,2)
    var h=xaxis+yaxis
    var res=Math.sqrt(h);
    return res;
    
}


//Problem:
//Write a function called “getNthElement”.
//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
//Input:getNthElement([1, 3, 5], 1);
//Output:3
function getNthElement(array,n){
   return array[n];
}
console.log(getNthElement([1,3,5],1))




//Problem:
//Write a function called “getLastElement”.
//Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
//Input:getLastElement([1, 2, 3, 4]);
//Output:4
function getLastElement(array){
 if(array.length!==0)
 {
     return array[array.length-1]
 }
 else{
     return "-1"
 }
}
console.log(getLastElement([1,2,3,4]))

//Problem:
//Write a function called “getProperty”.
//Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
//Input:getProperty(obj,’mykey’);var obj = { mykey: “value” };
//output:value;
var obj = {
 mykey: "value"
};


function getProperty(obj, key) {
      
      console.log(obj[key])
 
}
getProperty(obj,"mykey")




//Write a function called “addProperty”.
//Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

//var obj = {
//mykey: “value”,
//myProperty: true
//}
var obj = {
 mykey: "value"
};
function addProperty(obj, key){
     obj.key="hi";
     console.log(obj)
}
addProperty(obj,"my")




//Write a function called “removeProperty”.
//Given an object and a key, “removeProperty” removes the given key from the given object.
//Input:removeProperty(obj, “name”);
var obj = {
 mykey: "value"
};
function removeProperty(obj, key){

         delete obj[key]
         console.log(obj)
}
removeProperty(obj,"mykey")


////Problem:
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    var p=0,n=0;
    var newarray=arr.map(function(a){
        if(a>=0)
        {
            p+=1
        }
        else
        {
            n+=1
        }
    })
    arr=[];
    arr.push(p);
    arr.push(n);
    return arr;
   
 
 
 
}
console.log(ar2(arr));





////Problem:
//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
    var p=[]
 var array=ar.map(function(a){
     if(a>0)
     {
         p.push(a);
     }
 })
 return p;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);



//Problem:
//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
//Input:powersOfTwo(0)
//n = 1 -> 2⁰, 2¹ -> [1,2]
function powersOfTwo(n){
  
 var a=[];
 for(var i=0;i<n;i++)
 {
    
     a.push(Math.pow(2,i))
 }
 return a;
}
console.log(powersOfTwo(2))




////Problem:
//Find the maximum number in an array of numbers
function findMax(ar)
{
   return Math.max(...ar);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);


//Print the first range prime numbers
var primes = [2];
//function to print prime numbers
function printPrimes(a,n)
{
for (var i=a;i<n;i++){
    var isPrime = true;
    for (var j=0;j<primes.length;j++){
        if (i%primes[j]===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){primes.push(i)
        
    }
}
    return primes

}
console.log(printPrimes(10,100));


//Print the first 100 prime numbers

var primes = [2];
//function to print prime numbers
function printPrimes(n)
{
for (var i=3;i<n;i++){
    var isPrime = true;
    for (var j=0;j<primes.length;j++){
        if (i%primes[j]===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){primes.push(i)
        
    }
}
    return primes

}
console.log(printPrimes(100));


////Problem:
//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   return s.split("").reverse().join("");
}



////Problem:
//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 //Some piece of code goes here 
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}
console.log("max",max);

////Problem:
//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s)
{   
    var sum=0;
    var n=s.toString().split(",")
    var arr=n.map(function(a){
       
        sum+=parseInt(a)
    })
    return sum;
  
}

