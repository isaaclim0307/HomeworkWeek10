var vg_1 = "map.json";

vegaEmbed("#map", vg_1).then(function(result) {

    // Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

var vg_2 = "homework10.json";

vegaEmbed("#bubble_plot", vg_2).then(function(result) {

    // Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);