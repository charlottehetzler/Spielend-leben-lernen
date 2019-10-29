import "bootstrap";

// Toggle offer

$(document).ready(function(){
  $("#one-more").hide();
  $("#one").click(function(){
    $("#one-more").toggle();
  });
});

$(document).ready(function(){
  $("#two-more").hide();
  $("#two").click(function(){
    $("#two-more").toggle();
  });
});

$(document).ready(function(){
  $("#three-more").hide();
  $("#three").click(function(){
    $("#three-more").toggle();
  });
});

$(document).ready(function(){
  $("#four-more").hide();
  $("#four").click(function(){
    $("#four-more").toggle();
  });
});

$(document).ready(function(){
  $("#five-more").hide();
  $("#five").click(function(){
    $("#five-more").toggle();
  });
});


// Mapbox

import mapboxgl from 'mapbox-gl';

const mapElement = document.getElementById('map');
mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [8.6, 50],
  zoom: 8
});
new mapboxgl.Marker()
  .setLngLat([8.67, 50.13])
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([8.65,49.76])
  .addTo(map);
