/// Line Chart


/// Adding Title and label

var array1= {
    x: [4, 5, 8, 9, 17, 19, 20, 21, 22, 23, 24, 26, 28, 30, 31], 
    y: [1, 4, 5, 6, 9, 10, 12, 15, 20, 22, 23, 29, 30, 32, 35],
    mode: 'lines',
    name: 'Solid',
    line: {
        dash: 'solid',
        width: 6
  }
};

var array2=  {
    x: [1, 4, 5, 6, 9, 10, 12, 15, 20, 22, 23, 29, 30, 32, 35],
    y: [4, 5, 8, 9, 17, 19, 20, 21, 22, 23, 24, 26, 28, 30, 31],
    mode: 'lines',
    name: 'dashdot',
    line: {
        dash: 'dashdot',
        width: 4
  }
};

var data =[ array1,array2];

var layout = {
    title: "Line Graph",
    xaxis: {title: "x-axis"},
    yaxis: {title: "y-axia"}
   };


Plotly.newPlot("line_plot", data ,layout);

