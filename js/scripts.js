
//instantiate map into container with set view
var map = L.map('mapcontainer').setView([39.9526, -75.1652], 12);
//add carto light basemap
//var layer =  
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);




//set up marker characteristics
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "deepskyblue",
    color: "cyan",
    weight: 1,
    opacity: .2,
    fillOpacity: 0.8
};

//create circleMarkers for stations with popup content
L.geoJson(stations, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    },
}).bindPopup(function (layer) {
    return (' Total number of docks in kiosk: ' + layer.feature.properties.totalDocks +
     		' Docks currently available: ' + layer.feature.properties.docksAvailable + 
     		' Bikes currently available: ' + layer.feature.properties.bikesAvailable);  
}).addTo(map);

