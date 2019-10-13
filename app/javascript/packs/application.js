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


// active Class on Navbar

function setActive() {
  console.log("hello");
  aObj = document.getElementByClassName('navbar-item');
  for(i=0;i<aObj.length;i++) {
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}

window.onload = setActive();
