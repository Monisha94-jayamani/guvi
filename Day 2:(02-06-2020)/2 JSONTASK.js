 //problem 0 part A
 //Basic Tasks to play with JSON
 var cat = {
    "name": "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep","pre-sleep naps"],
    weight: 3
    }
    ]
   }
   
   
   //1.to change the cat name to Fluffyy
   cat["name"]="Fluffyy"
   //console.log(cat);
   
   
   //2.Add height and weight to Fluffy
   cat["height"]="100mm";
   cat["weight"]="50mm"
   //console.log(cat);
   
   
  //3.update Fluffyy
  cat["name"]="Fluffyy"
  //4.list all the activities of Fluffyy cat catFriends
   var activities=[];
    for(var i=0;i<cat["catFriends"].length;i++)
    {
        var activity=cat["catFriends"][i].activities
        for(var j=0;j<activity.length;j++)
        {
            activities.push(activity[j])
        }
       
    }
    //console.log(activities)
    //here activity list all activity of fluffy cat catFriends
    
    
    //5.print total weight of catFriends
    var totalWeightOfCatfriends=0;
    for(var i=0;i<cat["catFriends"].length;i++)
    {
        totalWeightOfCatfriends+=cat["catFriends"][i].weight
    }
    //display total weight of cat catFriends
    console.log(totalWeightOfCatfriends)
    
    
    //6.Print the total activities of all cats
     var catactivity=cat["activities"].length
     for(var i=0;i<cat["catFriends"].length;i++)
    {
        var a=cat["catFriends"][i].activities.length;
        catactivity+=a
    }
    //console.log(catactivity);
    
    //7.Add 2 more activities to bar & foo cats
    cat["catFriends"][0]["activities"][2]="eat dry fish"
    cat["catFriends"][0]["activities"][3]="drink milk"
     
    cat["catFriends"][1].activities[2]="carrot"
    cat["catFriends"][1].activities[3]="meat"
    //console.log(cat["catFriends"][1]);
    
    //8.Update the fur color of bar
      cat["catFriends"][0].furcolor="blue"    
     //console.log(cat["catFriends"][0])

     //Problem 0 : Part B (15 mins):
     //Iterating with JSON object’s Values
     var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
   }
   //1. Loop over the accidents array. Change atFaultForAccident from  trueto false.
   for(var i=0;i<myCar["accidents"].length;i++)
   {
       myCar["accidents"][i].atFaultForAccident="false"
   }
   //console.log(myCar["accidents"])
   
   
   //2.date of many accidents .
   for(var i=0;i<myCar["accidents"].length;i++)
   {
       console.log(myCar["accidents"][i].date);
   }
   
  
   //Real challenges starts here
//:bowtie:


//Problem 1 (5 mins):
//Parsing an JSON object’s Values:
//write a function called “printAllValues” which returns an newArray of all the input object’s values.
var obj = {"name" : "RajiniKanth", "age" : 33, hasPets : false};
function printAllValues(obj) {
    var array=[]
 for(var i in obj)
 {
     var key=i;
     var value=obj[i]
     array.push(value);
     value="";
 }
 console.log(array)
}
printAllValues(obj);
//output
//[“RajiniKanth”, 33, false]




//Problem 2(5 mins) :
//Parsing an JSON object’s Keys:
//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
var obj = {"name" : "RajiniKanth", "age" : 33, hasPets : false};
function printAllKeys(obj) {
    var array=[]
 for(var i in obj)
 {
     var key=i;
     var value=obj[i]
     array.push(key);
     value="";
 }
 console.log(array)
}
printAllKeys(obj);
//output
//[‘name’, ‘age’, ‘hasPets’]




//Problem 3( 7–9 mins):
//Parsing an JSON object and convert it to a list:
//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
var object = {name:"ISRO", age: 35, role: "Scientist"};
function convertListToObject(object) {
    var array=[]
 for(var i in object)
 {
     var key=i;
     var value=object[i]
     array.push([key,value]);
     value="";
 }
 console.log(array)
}
convertListToObject(object);
//output
//[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]


//Problem 4( 5 mins):
//Parsing a list and transform the first and last elements of it:
var arr = ["GUVI", "I", "am", "a geek"];
//function to  create a object with first and last value in array
function transformFirstAndLast(arr) {
    var newObject={};
    var key=arr[0];
    //console.log(key)
    var value=arr[arr.length-1];
    //console.log(value);
    
    newObject[key]=value;
    return newObject;
  
}
console.log(transformFirstAndLast(arr))
//output
//var object = { GUVI : “Geek” }

//Problem 5 ( 7 -9 mins):
//Parsing a list of lists and convert into a JSON object:
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(var i=0;i<arr.length;i++)
 {
     var value=arr[i];
     var j=0
    newObject[value[j]]=value[j+1]   
     
 }
 
 return newObject;
}
console.log(fromListToObject(arr))
//output
//var object = { make : “Ford” model : “Mustang”,year : 1964 }


//Problem 6 (10 mins):
//Parsing a list of lists and convert into a JSON object:
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
[["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]
];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 var newObject={}
  for(var i=0;i<arr.length;i++)
  {
      var first=arr[i]
            for(var j=0;j<first.length;j++)
      {
          var l=0;
          var inside=first[j];
          
          
          newObject[inside[l]]=inside[l+1];
      }

      tranformEmployeeList.push(newObject);
      
        
  }
 
 
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));
  //output
  //[{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”} ]


   
   //Problem 7 (10 — 20 mins):
   //Parsing two JSON objects and Compare:
   var expected = {foo: 5, bar: 6};
   var actual = {foo: 6, bar: 5}
   function assertObjectsEqual(actual, expected, testName){
   // your code here
   //actual parsing string
  var act=JSON.stringify(actual);
  //expected parsing string
  var expect=JSON.stringify(expected);
  var testCase=testName;
  //Compare the two string
  if(act===expect)
   {
     console.log("Passed");
   }
    else
    {
     console.log("FAILED [my test] Expected"+expect+"but got"+act)
    }
    }
     assertObjectsEqual(actual,expected,"case1")
     //output
     //Output:FAILED [my test] Expected{"foo":5,"bar":6}but got{"foo":6,"bar":5}


     //Problem 8(10 mins):
     //Parsing JSON objects and Compare:
     







    //Problem 9(20 mins):
    //Parsing JSON objects and Compare:
    //Write a function to return the list of characters below 20 age
    var students = [
    {
    name:"Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name:"Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];
    function returnMinors(arr)
     {
       var arraylist=[];
       for(var i=0;i<students.length;i++)
       {
           if(students[i]["age"]>20)
           {
               arraylist.push(students[i]["name"])
           }
       }
       return arraylist;
   }
   console.log(returnMinors(students));
   
