#.map()

var months = [ 


{
    "Name" :"January",
    "Season" : "Winter",
    " Avg Temp" : "34.6 F"  
},
    
{ 
    "Name" : "Feburary",
    "Season" : "Winter",
    "Avg Temp" : "30.6 F"   
},
    
{
    "Name" : "March",
    "Season" : "Spring",
    "Avg Temp" : "45.5"
},
    
{
    "Name" : "April",
    "Season" : "Spring",
    "Avg Temp" : "51.9 F"  
},
    
{
    "Name" : "May",
    "Season" : "Spring",
    "Avg Temp" : "60.4 F"   
},
    
{
    "Name" : "June",
    "Season" : "Summer",
    "Avg Temp" : "72.6 F"   
},
    
{
    "Name" : "July",
    "Season" : "Summer",
    "Avg Temp" : "75.5"
},
    
{
    "Name" : "August",
    "Season" : "Summer",
    "Avg Temp" : "74.0 F"  
},
    
{
    "Name" : "September",
    "Season" : "Fall",
    "Avg Temp" : "67.8 F"
        
},
    
{
    "Name" : "October",
    "Season" : "Fall",
    "Avg Temp" : "57.0 F"        
},
    
{
    "Name" : "November",
    "Season" : "Fall",
    "Avg Temp" : "45.2 F"
        
},
    
{
    "Name" : "December",
    "Season" : "Winter",
    "Avg Temp" : "39.3 F"
        
},

]; 

var monthDetails = months.map(function(mon){
    return mon.Name;
});

console.log(monthDetails);



# .filter()

var highTemp = month.filter(function(higher) {
return higher  > 50 F

})