mapboxgl.accessToken = 'pk.eyJ1IjoiM2RwcmludHNjYW5uZXIiLCJhIjoiY2szb2VvbDNlMXRrbTNlcmtpZnY2NmhwaCJ9.tbHfZzTxsQqi3r_7RmS1DA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-0.101817, 51.522815],
zoom: 12
});
 
map.on('load', function() {
map.addSource('clerkenwell', {
'type': 'geojson',
'data': '/data/wards.geojson'
});
map.addLayer({
'id': 'maine',
'type': 'fill',
'source': 'clerkenwell',
'layout': {},
'paint': {
'fill-color': '#088',
'fill-opacity': 0.5
}
});
map.addControl(new mapboxgl.FullscreenControl());
});

