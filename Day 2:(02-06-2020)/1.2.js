//1.2 Extract and print the all the country name with capital name in console
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
//1.2 Extract and print the all the country name with capital name in console
var request=new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.onload=function(){
    //the received response in string in order to convert into json object parse
    var jsonData=JSON.parse(this.response)
    //console.log(jsonData);
    //function to  iterate and get the country name and capital name
for(var i in jsonData)
{
    //print the country and capital name
    console.log(jsonData[i].name,":",jsonData[i].capital)
}
};
request.send();
