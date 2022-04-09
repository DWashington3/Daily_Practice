/// Creating piechart

var value = [{
    values: [15, 45, 11, 12, 17],
    labels: ['Twitter','Instagram','Snapchat', 'Tumblr', 'Reddit'],
    type: 'pie'
  }];
  
  var layout = {
    title: "Pie Chart",
    height: 500,
    width: 500
    
};
  
  Plotly.newPlot('pie', value, layout);