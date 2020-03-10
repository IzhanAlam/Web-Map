
var mymap = L.map('mapid').setView([51.0447, -114.0719], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXpoYW5hbGFtIiwiYSI6ImNrN2s2ZDFiaTAzbzgzZG11MG1xMHdlZzEifQ.uBG-TBw1B2h81lSwJcLPvg'
}).addTo(mymap);


//Add some GeoJson

var calgary_json = 'https://data.calgary.ca/resource/c2es-76ed.geojson'

function cal_data(feature,layer)
{
    layer.bindPopup("Information");
};


L.geoJson(calgary_json, {
    onEachFeature: cal_data
}).addTo(mymap);