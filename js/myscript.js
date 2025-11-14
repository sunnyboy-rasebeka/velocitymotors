
var map = L.map('map').setView([-26.2041, 28.0473], 6); // South Africa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Velocity Motors Map'
}).addTo(map);
L.marker([-26.2041, 28.0473])
    .addTo(map)
    .bindPopup("<b>Velocity Motors - Pretoria</b><br>Head Office");
