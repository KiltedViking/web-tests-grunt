//API key - set your own key to use Google Maps
const key = 'YOUR_API_KEY';
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  var mapOptions = {
    center: new google.maps.LatLng(59.306695, 18.129980),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 12
  };

  //Get reference to HTML element to use for map
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  //For each place - add marker to map
  for (var p in places) {
    var place = places[p];
    var location = new google.maps.LatLng(place.lat, place.lng);
    addMarker(map, place.name, location);
  }
};

//Add marker to map
function addMarker(map, name, location) {
  var marker = new google.maps.Marker({
      position: location,
      title: name,
      map: map
    });
}

// Append the 'script' element to 'head'
document.head.appendChild(script);
      
// Array of places to show on map
var places = [
  {
    "name": "Home",
    "lat": 59.285269,
    "lng": 18.274322,
    "desc": "Where I live."
  },
  {
    "name": "Henriksdal",
    "lat": 59.285269,
    "lng": 18.274322,
    "desc": "Where I change from train to bus."
  },
  {
    "name": "Slussen",
    "lat": 59.285269,
    "lng": 18.274322,
    "desc": "Where I change from bus to underground."
  },
  {
    "name": "Medborgarplatsen",
    "lat": 59.285269,
    "lng": 18.274322,
    "desc": "Where I get of underground"
  },
  {
    "name": "Work",
    "lat": 59.285269,
    "lng": 18.274322,
    "desc": "Where I work."
  },
  {
    "name": "Nacka station",
    "lat": 59.306695,
    "lng": 18.129980,
    "desc": "Where I walk to to take the train home."
  }
];