mapboxgl.accessToken = 'pk.eyJ1IjoiM2RwcmludHNjYW5uZXIiLCJhIjoiY2szb2VvbDNlMXRrbTNlcmtpZnY2NmhwaCJ9.tbHfZzTxsQqi3r_7RmS1DA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-0.101817, 51.542815],
zoom: 11
});
 
map.on('load', function() {
    map.addSource('clerkenwell', {
    'type': 'geojson',
    'data': '/data/islington_wards.geojson'
    });
    map.addLayer({
    'id': 'wards-layer',
    'type': 'fill',
    'source': 'clerkenwell',
    'layout': {},
    'paint': {
    'fill-color': '#088',
    'fill-opacity': 0.5,
    'fill-outline-color': "#e30346"
    }
    });

    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        })
    );
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true
            })
        );

    

    map.on('click', 'wards-layer', function(e) {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<p style="color:black;">${e.features[0].properties.NAME}</p>`)
        .addTo(map);
        });
        
        // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'wards-layer', function() {
    map.getCanvas().style.cursor = 'pointer';
    });
    
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'wards-layer', function() {
    map.getCanvas().style.cursor = '';
    });
});

