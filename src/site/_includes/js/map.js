mapboxgl.accessToken = 'pk.eyJ1IjoiM2RwcmludHNjYW5uZXIiLCJhIjoiY2szb2VvbDNlMXRrbTNlcmtpZnY2NmhwaCJ9.tbHfZzTxsQqi3r_7RmS1DA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-0.128817, 51.555815],
zoom: 13
});
 
map.on('load', function() {
    map.addSource('clerkenwell', {
    'type': 'geojson',
    'data': '/data/wards.geojson'
    });
    map.addLayer({
    'id': 'wards-layer',
    'type': 'fill',
    'source': 'clerkenwell',
    'layout': {},
    'paint': {
    'fill-color': '#088',
    'fill-opacity': 0.5
    }
    });


    map.addControl(new mapboxgl.FullscreenControl());


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

