window.marker = null;

function initialize() {
  var map;
  var latitude = $('#map_canvas').attr('data-latitude');
  var longitude = $('#map_canvas').attr('data-longitude');
  var nottingham = new google.maps.LatLng(latitude, longitude);
  var style = [{
		'featureType': 'landscape',
		'elementType': 'geometry.fill',
		'stylers': [{
			'color': '#2F3238'
		}]
	}, {
		'elementType': 'labels.text.fill',
		'stylers': [{
			'color': '#FFFFFF'
		}]
	}, {
		'elementType': 'labels.text.stroke',
		'stylers': [{
			'visibility': 'off'
		}]
	}, {
		'featureType': 'road',
		'elementType': 'geometry.fill',
		'stylers': [{
			'color': '#50525f'
		}]
	}, {
		'featureType': 'road',
		'elementType': 'geometry.stroke',
		'stylers': [{
			'visibility': 'on'
		}, {
			'color': '#808080'
		}]
	}, {
		'featureType': 'poi',
		'elementType': 'labels',
		'stylers': [{
			'visibility': 'off'
		}]
	}, {
		'featureType': 'transit',
		'elementType': 'labels.icon',
		'stylers': [{
			'visibility': 'off'
		}]
	}, {
		'featureType': 'poi',
		'elementType': 'geometry',
		'stylers': [{
			'color': '#808080'
		}]
	}, {
		'featureType': 'water',
		'elementType': 'geometry.fill',
		'stylers': [{
			'color': '#3071a7'
		}, {
			'saturation': -65
		}]
	}, {
		'featureType': 'road',
		'elementType': 'labels.icon',
		'stylers': [{
			'visibility': 'off'
		}]
	}, {
		'featureType': 'landscape',
		'elementType': 'geometry.stroke',
		'stylers': [{
			'color': '#bbbbbb'
		}]
	}];
  var mapOptions = {
    center: nottingham,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: "#000",
    zoom: 15,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    }
  }
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  var mapType = new google.maps.StyledMapType(style, {
    name: "Grayscale"
  });
  map.mapTypes.set('grey', mapType);
  map.setMapTypeId('grey');
  var marker_image = 'plugins/google-map/images/marker.png';
  var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(37, 37));
  marker = new google.maps.Marker({
    position: nottingham,
    map: map,
    icon: pinIcon,
    title: 'Shoper'
  });
}
var map = document.getElementById('map_canvas');
if (map != null) {
  google.maps.event.addDomListener(window, 'load', initialize);
}