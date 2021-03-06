/// Creating a line graph with Plotly
///Plotly.newPlot("plotArea", [{x: [1, 2, 3, 4, 5, 6], y: [10, 20, 30,40,30,10]}]);


///Creating a Bar graph
//var trace = {
  ///  x: ["burrito", "pizza", "chicken"],
   /// y: [10, 18, 5],
   /// type: "bar"
 ///};
 ///Plotly.newPlot("plotArea", [trace]);


 ///Adding the axis, titel and labels to the graph
//var trace = {
    //x: ["burrito", "pizza", "chicken"],
    //y: [10, 18, 5],
    //type: "bar"
//};

//var layout = {
  //  title: "Luncheon Survey",
  //  xaxis: {title: "Food Option"},
   // yaxis: {title: "Number of Respondents"}
//};
//Plotly.newPlot("plotArea", [trace], layout);

//Creating a pie chart

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", data, layout);