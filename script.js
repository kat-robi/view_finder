// Create map (zoomed out so all cities show)
var map = L.map('map').setView([40, 0], 2);

// Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);


// Paris
L.marker([48.8566, 2.3522]).addTo(map)
  .bindPopup(`
    <h3>Paris</h3>
    <img src="images/paris1.jpg" width="200">
  `);

// London
L.marker([51.5072, -0.1276]).addTo(map)
  .bindPopup(`
    <h3>London</h3>
    <img src="images/london1.jpg" width="200">
  `);

// Dublin
L.marker([53.3498, -6.2603]).addTo(map)
  .bindPopup(`
    <h3>Dublin</h3>
    <img src="images/dublin1.jpg" width="200">
  `);

// New York City
L.marker([40.7128, -74.0060]).addTo(map)
  .bindPopup(`
    <h3>New York City</h3>
    <img src="images/nyc1.jpg" width="200">
  `);

// Austin
L.marker([30.2672, -97.7431]).addTo(map)
  .bindPopup(`
    <h3>Austin</h3>
    <img src="images/austin1.jpg" width="200">
  `);

// Lisbon
L.marker([38.7223, -9.1393]).addTo(map)
  .bindPopup(`
    <h3>Lisbon</h3>
    <img src="images/lisbon1.jpg" width="200">
  `);

// Seville
L.marker([37.3891, -5.9845]).addTo(map)
  .bindPopup(`
    <h3>Seville</h3>
    <img src="images/seville1.jpg" width="200">
  `);

// Barcelona
L.marker([41.3851, 2.1734]).addTo(map)
  .bindPopup(`
    <h3>Barcelona</h3>
    <img src="images/barcelona1.jpg" width="200">
  `);

// Milan
L.marker([45.4642, 9.1900]).addTo(map)
  .bindPopup(`
    <h3>Milan</h3>
    <img src="images/milan1.jpg" width="200">
  `);

// Vienna
L.marker([48.2082, 16.3738]).addTo(map)
  .bindPopup(`
    <h3>Vienna</h3>
    <img src="images/vienna1.jpg" width="200">
  `);

// Athens
L.marker([37.9838, 23.7275]).addTo(map)
  .bindPopup(`
    <h3>Athens</h3>
    <img src="images/athens1.jpg" width="200">
  `);

// Santorini
L.marker([36.3932, 25.4615]).addTo(map)
  .bindPopup(`
    <h3>Santorini</h3>
    <img src="images/santorini1.jpg" width="200">
  `);

// Stockholm
L.marker([59.3293, 18.0686]).addTo(map)
  .bindPopup(`
    <h3>Stockholm</h3>
    <img src="images/stockholm1.jpg" width="200">
  `);

// Lloret de Mar
L.marker([41.7000, 2.8500]).addTo(map)
  .bindPopup(`
    <h3>Lloret de Mar</h3>
    <img src="images/lloret1.jpg" width="200">
  `);

// Portofino
L.marker([44.3039, 9.2097]).addTo(map)
  .bindPopup(`
    <h3>Portofino</h3>
    <img src="images/portofino1.jpg" width="200">
  `);

// Florence
L.marker([43.7696, 11.2558]).addTo(map)
  .bindPopup(`
    <h3>Florence</h3>
    <img src="images/florence1.jpg" width="200">
  `);

// Rome
L.marker([41.9028, 12.4964]).addTo(map)
  .bindPopup(`
    <h3>Rome</h3>
    <img src="images/rome1.jpg" width="200">
  `);

// San Gimignano
L.marker([43.4675, 11.0437]).addTo(map)
  .bindPopup(`
    <h3>San Gimignano</h3>
    <img src="images/sangimi1.jpg" width="200">
  `);

// Tuscany
L.marker([43.7711, 11.2486]).addTo(map)
  .bindPopup(`
    <h3>Tuscany</h3>
    <img src="images/tuscany1.jpg" width="200">
  `);

// Lake Como
L.marker([46.0160, 9.2572]).addTo(map)
  .bindPopup(`
    <h3>Lake Como</h3>
    <img src="images/como1.jpg" width="200">
  `);

// San Antonio
L.marker([29.4241, -98.4936]).addTo(map)
  .bindPopup(`
    <h3>San Antonio</h3>
    <img src="images/sanantonio1.jpg" width="200">
  `);

// Rockwall
L.marker([32.9312, -96.4597]).addTo(map)
  .bindPopup(`
    <h3>Rockwall</h3>
    <img src="images/rockwall1.jpg" width="200">
  `);

// Honolulu
L.marker([21.3069, -157.8583]).addTo(map)
  .bindPopup(`
    <h3>Honolulu</h3>
    <img src="images/honolulu1.jpg" width="200">
  `);

// Washington, D.C.
L.marker([38.9072, -77.0369]).addTo(map)
  .bindPopup(`
    <h3>Washington, D.C.</h3>
    <img src="images/dc1.jpg" width="200">
  `);

// Montreux
L.marker([46.4312, 6.9107]).addTo(map)
  .bindPopup(`
    <h3>Montreux</h3>
    <img src="images/montreux1.jpg" width="200">
  `);

// Reykjavík
L.marker([64.1466, -21.9426]).addTo(map)
  .bindPopup(`
    <h3>Reykjavík</h3>
    <img src="images/iceland1.jpg" width="200">
  `);

// Dallas
L.marker([32.7767, -96.7970]).addTo(map)
  .bindPopup(`
    <h3>Dallas</h3>
    <img src="images/dallas1.jpg" width="200">
  `);

// Meteora
L.marker([39.7217, 21.6300]).addTo(map)
  .bindPopup(`
    <h3>Meteora</h3>
    <img src="images/meteora1.jpg" width="200">
  `);

// Québec City
L.marker([46.8139, -71.2080]).addTo(map)
  .bindPopup(`
    <h3>Québec City</h3>
    <img src="images/quebec1.jpg" width="200">
  `);

// Copenhagen
L.marker([55.6761, 12.5683]).addTo(map)
  .bindPopup(`
    <h3>Copenhagen</h3>
    <img src="images/copenhagen1.jpg" width="200">
  `);

// Orlando
L.marker([28.5383, -81.3792]).addTo(map)
  .bindPopup(`
    <h3>Orlando</h3>
    <img src="images/orlando1.jpg" width="200">
  `);

// Girona
L.marker([41.9794, 2.8214]).addTo(map)
  .bindPopup(`
    <h3>Girona</h3>
    <img src="images/girona1.jpg" width="200">
  `);
