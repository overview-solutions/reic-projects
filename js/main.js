mapboxgl.accessToken = 'pk.eyJ1IjoiZWFydGhhZGFtIiwiYSI6ImNqd3VzNnN3ZDA2OWE0OHBoN2xrNmlrNGYifQ.MMqPanYD57YyTkaJYxyeHQ';

//Add commas and stuff to cost value
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var map = new mapboxgl.Map({
    container: 'map',
    //style: 'mapbox://styles/earthadam/cjvy2aoum109m1ct7j4cce74d',
    //style: 'mapbox://styles/earthadam/cjggo2pka002c2so00qaetnaz',	//Website
    style: 'mapbox://styles/earthadam/cktk74ych0xsr17r4ttuyijg2',	//Presentation
    //style: 'mapbox://styles/earthadam/cjggwweef00002rpuoj1t93h3',	//Desert
    //style: 'mapbox://styles/earthadam/cjs968jaf2e1j1fmp6hj0pwwn',
    center: [10.902049,7],
    zoom: 5.2
});

var icon = "circle";

document.getElementById('fly').addEventListener('click', () => {
    // Fly to a random location by offsetting the point -74.50, 40
    // by up to 5 degrees.
    map.flyTo({
    center: [11.5373476,4.7891482],
    zoom: 19,
    pitch: 45,
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
    });

map.on('load', function() {
    var layers = ['Retired','Active', 'Future'];
    var colors = ['#39DFff','#00FF00', '#FFFF00'];
    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
      
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      }
    //map.addSource('projects', { type: 'geojson', data: 'projects.geojson' });
    map.addSource('projects', { type: 'geojson', data: 'https://raw.githubusercontent.com/overview-solutions/reic-projects/master/projects.geojson' });
    // Add a layer showing the places.
    map.addLayer({
        "id": "sites",
        "type": "circle",
        source: "projects",
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 20,
                'stops': [[12, 5], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': '#00ff00',
            'circle-stroke-color': '#00497A',
            'circle-stroke-width':1
        }
    });

    map.addLayer({
        'id' : 'Surveys',
        'type' : 'raster',
        "source" : {
            'type' : 'raster',
            'url' : 'mapbox://earthadam.59vmkunc',
        }
    });
    
    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

   map.on('mouseover', 'sites', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML(
            '<h3><a href="' + e.features[0].properties["Link"] + '">' + e.features[0].properties["Village name"] + '</a></h3>')
            .addTo(map);
        
    });
    
   /*
    map.on('click', 'sites', function(e) {
        el.className = 'marker';
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Populate the popup and set its coordinates
        // based on the feature found.
        if(e.features[0].properties["Link"]!=""){
            popup.setLngLat(e.features[0].geometry.coordinates)
                .setHTML(
                "<img src=\"http://smartvillage.ieee.org/wp-content/uploads/flags/" + e.features[0].properties["Country"] + ".png\"style=\"width:100px;height:67px;\"/>" +
                "<h2>"+ e.features[0].properties["Organization Contracted"]+"</h2>"+
                '<h3><a href="' + e.features[0].properties["Link"] + '">' + "Link to Project" + '</a></h3>'+
                e.features[0].properties["Project Name"]+"<br>"+
                "<b>Country:</b> "+e.features[0].properties["Country"]+"<br>"+
                "<b>Years Active: </b>"+e.features[0].properties["Years Active"])
                //.setHTML(e.features[0].properties.description)
                .addTo(map);
        }else{
            popup.setLngLat(e.features[0].geometry.coordinates)
                .setHTML(
                "<img src=\"http://smartvillage.ieee.org/wp-content/uploads/flags/" + e.features[0].properties["Country"] + ".png\"style=\"width:100px;height:67px;\"/>" +
                "<h2>"+ e.features[0].properties["Organization Contracted"]+"</h2>"+
                e.features[0].properties["Project Name"]+"<br>"+
                "<b>Country:</b> "+e.features[0].properties["Country"]+"<br>"+
                "<b>Years Active: </b>"+e.features[0].properties["Years Active"])
                //.setHTML(e.features[0].properties.description)
                .addTo(map);
        }
    });
*/
    map.on('click', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    
});
