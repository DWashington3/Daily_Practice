var one = {
    x: [14, 17, 18, 19, 20],
    y: [1, 4, 12, 14, 19],
    mode: 'markers',
    marker:{
        size:[30,50,70,90]
    },
    name:"Bubbles"
  };
  
  var two = {
    x: [1, 4, 11, 17, 19],
    y: [8, 10, 13, 14, 15],
    mode: 'lines',
    type: 'scatter',
    name:"line"
  };
  
  var three = {
    x: [2, 4, 6, 8, 20],
    y: [3, 4, 7, 10, 13],
    mode: 'lines+markers',
    type: 'scatter',
    name:"dots"
  };
  
  var data = [one, two, three];

  var layout = {
    title: "Scatter/Dot Plot",
    xaxis: {title: "x-axis"},
    yaxis: {title: "y-axis"}
   };
  
  Plotly.newPlot('scatter_plot', data, layout);