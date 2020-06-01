function a(){
var TechnicalSpecifications={
   "Dimensions": {
     "overall length":3500,
     "overall width":1600,
     "overall height":1490,
     "Wheel base":2360,
     trackwidth:{
         
             front:1405,
             rear:1400
                },
     "minimum turnin gradius":4.5,
     "minimum ground clearance":170,
    
    },
    
     "capacities":{
    seatingcapacity:5,
    fueltankcapacity:35
     },
     
     "Engine":{
    type:"kbseries",
    numberofoptions:3,
    numberofvalves:12,
    capacity:998,
    "bore x scrole":730*79.5,
    "compression ratio":10.1,
    "maximum power":67/6.200,
    "maximum torque":90/3.500,
    "fuel distribution":"multipoint injection"
     },
     "transmission":{
         type:"5-speed MT"
     },
     "chassis":{
         steering:"rack& pinion,power assisted",
         brakes:{
             front:"ventilated discs",
             rear:"drums"
         },
         suspension:{
             front:"MacPherson strut & coil spring",
             rear:"isolated trailling link & coil spring"
         },
     
        "shock absorbers":"gas filled",
        tyre:"155/8OR13"
     },
     "weights":{
           "kerb weight (min. with full options)":860-880,
           "cross vechile weight":1320
     }
    
}
//console.log(TechnicalSpecifications["Dimensions"]["overall width"])
}
a();
