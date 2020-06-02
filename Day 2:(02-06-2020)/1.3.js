//1.3 Extract and print all the country name with alpha3Code and population in console. 
<!DOCTYPE HTML>
<html>
    <head>
        <title>api countries 1.1 to country name with flag</title>
    </head>
    <body>
        
    <script src="api.js">
        </script>
    </body>
    </html>
//script file
//1.3 Extract and print all the country name with alpha3Code and population in console. 

var request=new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.onload=function(){
    //the received response in string in order to convert into json object parse
    var jsonData=JSON.parse(this.response)
    //console.log(jsonData);
    //function to  iterate and get the country name and alpha3code and population
for(var i in jsonData)
{
    //print the country and alpha3code and population
    console.log(jsonData[i].name,":",jsonData[i].alpha3Code,"and population is",jsonData[i].population)
}
};
request.send();
