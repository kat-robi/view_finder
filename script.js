
var map = L.map('map').setView([40, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

function randomPopup(name, photos) {
var random = photos[Math.floor(Math.random() * photos.length)];
return `<h3>${name}</h3><img src="${random}" width="200">`;
}

L.marker([48.8566, 2.3522]).addTo(map)
.bindPopup(function() {
return randomPopup("Paris", ["images/paris1.jpg","images/paris2.jpg"]);
});

L.marker([51.5072, -0.1276]).addTo(map)
.bindPopup(function() {
return randomPopup("London", ["images/london1.jpg","images/london2.jpg"]);
});


L.marker([53.3498, -6.2603]).addTo(map)
.bindPopup(function() {
return randomPopup("Dublin", ["images/dublin1.jpg","images/dublin2.jpg"]);
});

L.marker([40.7128, -74.0060]).addTo(map)
.bindPopup(function() {
return randomPopup("New York City", ["images/nyc1.jpg","images/nyc2.jpg"]);
});

L.marker([30.2672, -97.7431]).addTo(map)
.bindPopup(function() {
return randomPopup("Austin", ["images/austin1.jpg","images/austin2.jpg"]);
});

L.marker([38.7223, -9.1393]).addTo(map)
.bindPopup(function() {
return randomPopup("Lisbon", ["images/lisbon1.jpg","images/lisbon2.jpg"]);
});

L.marker([37.3891, -5.9845]).addTo(map)
.bindPopup(function() {
return randomPopup("Seville", ["images/seville1.jpg","images/seville2.jpg"]);
});

L.marker([41.3851, 2.1734]).addTo(map)
.bindPopup(function() {
return randomPopup("Barcelona", ["images/barcelona1.jpg","images/barcelona2.jpg"]);
});

L.marker([45.4642, 9.1900]).addTo(map)
.bindPopup(function() {
return randomPopup("Milan", ["images/milan1.jpg","images/milan2.jpg"]);
});

L.marker([48.2082, 16.3738]).addTo(map)
.bindPopup(function() {
return randomPopup("Vienna", ["images/vienna1.jpg","images/vienna2.jpg"]);
});

L.marker([37.9838, 23.7275]).addTo(map)
.bindPopup(function() {
return randomPopup("Athens", ["images/athens1.jpg","images/athens2.jpg"]);
});

L.marker([36.3932, 25.4615]).addTo(map)
.bindPopup(function() {
return randomPopup("Santorini", ["images/santorini1.jpg","images/santorini2.jpg"]);
});

L.marker([59.3293, 18.0686]).addTo(map)
.bindPopup(function() {
return randomPopup("Stockholm", ["images/stockholm1.jpg","images/stockholm2.jpg"]);
});

L.marker([41.7000, 2.8500]).addTo(map)
.bindPopup(function() {
return randomPopup("Lloret de Mar", ["images/lloret1.jpg","images/lloret2.jpg"]);
});

L.marker([44.3039, 9.2097]).addTo(map)
.bindPopup(function() {
return randomPopup("Portofino", ["images/portofino1.jpg","images/portofino2.jpg"]);
});

L.marker([43.7696, 11.2558]).addTo(map)
.bindPopup(function() {
return randomPopup("Florence", ["images/florence1.jpg","images/florence2.jpg"]);
});

L.marker([41.9028, 12.4964]).addTo(map)
.bindPopup(function() {
return randomPopup("Rome", ["images/rome1.jpg","images/rome2.jpg"]);
});

L.marker([43.4675, 11.0437]).addTo(map)
.bindPopup(function() {
return randomPopup("San Gimignano", ["images/sangimi1.jpg","images/sangimi2.jpg"]);
});

L.marker([43.7711, 11.2486]).addTo(map)
.bindPopup(function() {
return randomPopup("Tuscany", ["images/tuscany1.jpg","images/tuscany2.jpg"]);
});

L.marker([46.0160, 9.2572]).addTo(map)
.bindPopup(function() {
return randomPopup("Lake Como", ["images/como1.jpg","images/como2.jpg"]);
});

L.marker([29.4241, -98.4936]).addTo(map)
.bindPopup(function() {
return randomPopup("San Antonio", ["images/sanantonio1.jpg","images/sanantonio2.jpg"]);
});

L.marker([32.9312, -96.4597]).addTo(map)
.bindPopup(function() {
return randomPopup("Rockwall", ["images/rockwall1.jpg","images/rockwall2.jpg"]);
});

L.marker([21.3069, -157.8583]).addTo(map)
.bindPopup(function() {
return randomPopup("Honolulu", ["images/honolulu1.jpg","images/honolulu2.jpg"]);
});

L.marker([38.9072, -77.0369]).addTo(map)
.bindPopup(function() {
return randomPopup("Washington DC", ["images/dc1.jpg","images/dc2.jpg"]);
});

L.marker([46.4312, 6.9107]).addTo(map)
.bindPopup(function() {
return randomPopup("Montreux", ["images/montreux1.jpg","images/montreux2.jpg"]);
});

L.marker([64.1466, -21.9426]).addTo(map)
.bindPopup(function() {
return randomPopup("Reykjavik", ["images/iceland1.jpg","images/iceland2.jpg"]);
});

L.marker([32.7767, -96.7970]).addTo(map)
.bindPopup(function() {
return randomPopup("Dallas", ["images/dallas1.jpg","images/dallas2.jpg"]);
});

L.marker([39.7217, 21.6300]).addTo(map)
.bindPopup(function() {
return randomPopup("Meteora", ["images/meteora1.jpg","images/meteora2.jpg"]);
});

L.marker([46.8139, -71.2080]).addTo(map)
.bindPopup(function() {
return randomPopup("Quebec City", ["images/quebec1.jpg","images/quebec2.jpg"]);
});

L.marker([55.6761, 12.5683]).addTo(map)
.bindPopup(function() {
return randomPopup("Copenhagen", ["images/copenhagen1.jpg","images/copenhagen2.jpg"]);
});

L.marker([28.5383, -81.3792]).addTo(map)
.bindPopup(function() {
return randomPopup("Orlando", ["images/orlando1.jpg","images/orlando2.jpg"]);
});

L.marker([41.9794, 2.8214]).addTo(map)
.bindPopup(function() {
return randomPopup("Girona", ["images/girona1.jpg","images/girona2.jpg"]);
});
