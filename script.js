
var map = L.map('map').setView([48.8566, 2.3522], 5); // Paris

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Add marker
var marker = L.marker([48.8566, 2.3522]).addTo(map);

// When clicked → show image
marker.bindPopup(`
  <h3>Paris</h3>
  <img src="images/paris1.jpg" width="200">
`);
