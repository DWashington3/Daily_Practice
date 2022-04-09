///Create a Bar chart with labels ans title

var trace = {
    x:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var layout = {
    title: "Popular Beverages",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
};
Plotly.newPlot("bar_plot", [trace], layout);

