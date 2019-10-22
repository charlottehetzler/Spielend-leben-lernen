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

// active Class on Navbar

// const navContainer = document.getElementById("navbar-items");
// const navs = navContainer.getElementsByClassName("navbar-item");
// for (var i = 0; i < navs.length; i++) {
//   navs[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// Mapbox

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldHpsZXIiLCJhIjoiY2sxbmprZzVsMDhnMDNucnljYnZuYjg3MSJ9.bfpBECHO7lItHCBmwTbrIQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [50.054481, 8.643653],
  zoom: 5
});
    new mapboxgl.Marker()
    .setLngLat([8.67, 50.13])
    .addTo(map);
    new mapboxgl.Marker()
    .setLngLat([8.65,49.76])
    .addTo(map);




