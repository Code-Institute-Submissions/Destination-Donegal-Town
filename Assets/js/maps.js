/*
function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 54.653835, lng: -8.110328}
    });

  // Creates an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
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
        {content:   '<strong>The Lough Eske Castle</strong><br>\
                    <a href="https://goo.gl/maps/C26BBK3hQ3FAnhT17">Get Directions</a>',
                    lat: 54.688242,     
                    lng: -8.066898},
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
*/


        var map;
        var InforObj = [];
        
        var markersOnMap = [{
                placeName: "Lough Eske Castle<br><a href='https://goo.gl/maps/C26BBK3hQ3FAnhT17'>Get Directions</a>",
                LatLng: [{
                    lat: 54.688242,
                    lng: -8.066898
                }]
            },
            {
                placeName: "Gateway Lodge<br><a href='https://goo.gl/maps/H2oLX9hmd89z5rBb7'>Get Directions</a>",
                LatLng: [{
                    lat: 54.656105, 
                    lng: -8.114178
                }]
            },
            {
                placeName: "The Abbey Hotel<br><a href='https://goo.gl/maps/ytKooFj8a8niQn78A'>Get Directions</a>",
                LatLng: [{
                    lat: 54.653878, 
                    lng: -8.110944
                }]
            },
            {
                placeName: "Donegal Town Independent Hostel<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.656578, 
                    lng: -8.125806
                }]
            },
            {
                placeName: "Irene's Fun World<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.660085, 
                    lng: -8.111458
                }]
            },
            {
                placeName: "Donegal Railway Centre<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.656971, 
                    lng: -8.108012
                }]
            },
            {
                placeName: "The 'Fairy' Bank Walk<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.654715, 
                    lng: -8.112245
                }]
            },
            {
                placeName: "Donegal Town Playground<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.657619, 
                    lng: -8.109702
                }]
            },
            {
                placeName: "Donegal Craft Village<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.640873, 
                    lng: -8.115103
                }]
            },
            {
                placeName: "Donegal Town Castle<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.655090, 
                    lng: -8.110541
                }]
            },
            {
                placeName: "Donegal Bay Waterbus<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.652547, 
                    lng: -8.111339
                }]
            },
            {
                placeName: "Donegal Tours<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.653593, 
                    lng: -8.109974
                }]
            },
            {
                placeName: "McCafferty's Bar<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.653359, 
                    lng: -8.110716
                }]
            },
            {
                placeName: "The Abbey Bar<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.653812, 
                    lng: -8.110937
                }]
            },
            {
                placeName: "The Forge Bar<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.655511, 
                    lng: -8.112537
                }]
            },
            {
                placeName: "Dom's Pier 1 Bar<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.652942, 
                    lng: -8.111611
                }]
            },
            {
                placeName: "The Harbour Restaurant<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.652729, 
                    lng: -8.111013
                }]
            },
            {
                placeName: "Chandpur Indian Restaurant<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.653492, 
                    lng: -8.108156
                }]
            },
            {
                placeName: "La Bella Donna Restaurant<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.654792, 
                    lng: -8.111367
                }]
            },
            {
                placeName: "Four Laterns Takeaway<br><a href=''>Get Directions</a>",
                LatLng: [{
                    lat: 54.652823, 
                    lng: -8.111043
                }]
            }

        ];
 
        window.onload = function () {
            initMap();
        };
 
        function addMarkerInfo() {
            for (var i = 0; i < markersOnMap.length; i++) {
                var contentString = '<div><h6>' + markersOnMap[i].placeName
                '</h6></div>';
 
                const marker = new google.maps.Marker({
                    position: markersOnMap[i].LatLng[0],
                    map: map
                });
 
                const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });

                
 
                marker.addListener('click', function () {
                    closeOtherInfo();
                    infowindow.open(marker.get('map'), marker);
                    InforObj[0] = infowindow;
                });
            }
        }
 
        function closeOtherInfo() {
            if (InforObj.length > 0) {
                /* detach the info-window from the marker ... undocumented in the API docs */
                InforObj[0].set("marker", null);
                /* and close it */
                InforObj[0].close();
                /* blank the array */
                InforObj.length = 0;
            }
        }
 
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: {lat: 54.653835, lng: -8.110328}
            });
            addMarkerInfo();
        }
        
