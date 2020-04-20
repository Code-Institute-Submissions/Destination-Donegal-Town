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

google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(map, event.latLng);
});

function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: content[i % labels.length]
  });
  infowindow.open(map,marker);
}

  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
  {content: '<strong>The Lough Eske Castle</strong><br>\
                <a href="https://goo.gl/maps/C26BBK3hQ3FAnhT17">Get Directions</a>',
            lat: 54.688242, lng: -8.066898},
  {content: '<strong>The Gateway Lodge</strong><br>\
                <a href="https://goo.gl/maps/H2oLX9hmd89z5rBb7">Get Directions</a>',
            lat: 54.656105, lng: -8.114178},
  {content: '<strong>The Abbey Hotel</strong><br>\
                <a href="https://goo.gl/maps/ytKooFj8a8niQn78A">Get Directions</a>', 
            lat: 54.653878, lng: -8.110944},
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

/*
function initMap() {
  var lougheske = {
    info:
      '<strong>The Lough Eske Castle</strong><br>\
    	<a href="https://goo.gl/maps/C26BBK3hQ3FAnhT17">Get Directions</a>',
        lat: 54.688242, lng: -8.066898,
  }

  var gatewaylodge = {
    info:
      '<strong>The Gateway Lodge</strong><br>\
    	<a href="https://goo.gl/maps/H2oLX9hmd89z5rBb7">Get Directions</a>',
        lat: 54.656105, lng: -8.114178,
  }

  var abbeyhotel = {
    info:
      '<strong>The Abbey Hotel</strong><br>\
    	<a href="https://goo.gl/maps/ytKooFj8a8niQn78A">Get Directions</a>',
    lat: 54.653878, lng: -8.110944,
  }

  var locations = [
    [lougheske.info, lougheske.lat, lougheske.long, 0],
    [gatewaylodge.info, gatewaylodge.lat, gatewaylodge.long, 1],
    [abbeyhotel.info, abbeyhotel.lat, abbeyhotel.long, 2],
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 54.653835, lng: -8.110328},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

  var infowindow = new google.maps.InfoWindow({})

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }
}
*/
