import "bootstrap";

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


//Mapbox

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldHpsZXIiLCJhIjoiY2sxbmprZzVsMDhnMDNucnljYnZuYjg3MSJ9.bfpBECHO7lItHCBmwTbrIQ';
var map = new mapboxgl.Map({
container: 'contact-map',
style: 'mapbox://styles/mapbox/streets-v11'
});
