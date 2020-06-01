//2.6. Print the price of Javascript book in console. 
//price of the javascript book
function javascriptprice(){
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
  //price of the javascript book
   var javascriptprice=library[0].price;
   console.log(javascriptprice);
   
}
javascriptprice();
    
