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
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  /*** Get GeoJSON data and add to map **************************************/
  var url = "important-places-geojson.json";

  //If browser supports fetch - get data and add to map...
  if(window.fetch) {
    var request = new Request(url);
    fetch(request).then(function(res) {
      return res.json();        
    }).then(function(data) {
      //Argument seems to be a JSON object, i.e. a URL (as in examples) won't work ;-(
      map.data.addGeoJson(data);
    });
  }
  else {  //... or inform visitor that they need new browser
    var error = document.getElementById("error");
    error.innerText = "Get a real browser! IE (or your browser) doesn't support required feature!";
    error.classList.add("error");
  }
};

// Append the 'script' element to 'head'
document.head.appendChild(script);