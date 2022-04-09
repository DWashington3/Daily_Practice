/// creating horizontal bar graph
var layout = {
    title: "Popular Beverages",
    yaxis: {title: "Drinks"},
    xaxis: {title: "% of Drinks Ordered"}

};

var data = [{
    type: 'bar',
    x: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    y: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    orientation: 'h'
  }];
  
  Plotly.newPlot('hbar_plot', data,layout);
