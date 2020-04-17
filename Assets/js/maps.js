console.log("Hello");

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 54.653835, lng: -8.110328}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
  {lat: 54.688242, lng: -8.066898},
  {lat: 54.656105, lng: -8.114178},
  {lat: 54.653878, lng: -8.110944},
  {lat: 54.656578, lng: -8.125806},
  {lat: 54.660085, lng: -8.111458},
  {lat: 54.656971, lng: -8.108012},
  {lat: 54.654715, lng: -8.112245},
  {lat: 54.657619, lng: -8.109702},
  {lat: 54.640873, lng: -8.115103},
  {lat: 54.655090, lng: -8.110541},
  {lat: 54.652547, lng: -8.111339},
  {lat: 54.653593, lng: -8.109974},
  {lat: 54.653359, lng: -8.110716},
  {lat: 54.653812, lng: -8.110937},
  {lat: 54.655511, lng: -8.112537},
  {lat: 54.652942, lng: -8.111611},
  {lat: 54.652729, lng: -8.111013},
  {lat: 54.653492, lng: -8.108156},
  {lat: 54.654792, lng: -8.111367},
  {lat: 54.652823, lng: -8.111043}
]