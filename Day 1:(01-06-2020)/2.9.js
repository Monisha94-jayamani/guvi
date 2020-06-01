//2.9. Print the count value of Person 2 in console. 
// print the count value of person 2 in console
//function to create library array
function countvalueofperson2(){
    //create a array of objects given as it is
var library=[
    {
        title:"javascript",
        price:500,
        readers:[
            {
                name:"person 1",
                count:300
            },
           {
                name:"person 2",
                count:400
            }
             
            ],
            authordetails:{
                name:"raj",
                age:40
            },
    },
    {
        title:"node js",
        price:600,
        readers:[],
         authordetails:{
                name:"raj",
                age:40
            }
    }
    
    ]
 //to count the value of countvalueofperson2
 var c=library[0].readers[1].count;
 console.log(c);
  
   
}
countvalueofperson2();
    
