//Update the count of Person 2 inside readers Array in Javascript;
//create a function to create a array of object called library
function library(){
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
    //update the count of person2 in read array in js
    var update=library[0]["readers"][1].count=700;
    //print the updated value
    //console.log(library[0]["readers"][1].count);
}
library();
    
