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
  /*** Create map ***********************************************************/
  var mapOptions = {
    center: new google.maps.LatLng(59.285269, 18.274322),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  /*** Create marker ********************************************************/
  var markerOptions = {
    position: new google.maps.LatLng(59.285269, 18.274322)
  }

  var marker = new google.maps.Marker(markerOptions);
  marker.setMap(map);

  /*** Create info window ***************************************************/
  var infoWindowOptions = {
    content: "Where I live! ;-) I wonder if this <b style='color: red'>can contain</b> HTML tags?"
  }

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  google.maps.event.addListener(marker, "click", function(e) {
    infoWindow.open(map, marker);
  });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);