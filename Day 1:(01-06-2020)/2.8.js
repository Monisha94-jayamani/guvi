//2.8. Print how many readers for javascript in console. 
// how many readers in javascript console
//function to create library array
function howmanyreaders(){
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
  //how many readers in javascript
  let count = 0;
  for (var c in library[0]["readers"]) {
    count = count + 1;
    }
console.log(count);// 2
  
   
}
howmanyreaders();
    
