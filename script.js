document.addEventListener("DOMContentLoaded", () => {

  console.log("SCRIPT LOADED");

  const map = L.map('map').setView([30, 0], 2);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  const overlay = document.getElementById("photoOverlay");
  const img = document.getElementById("photoDisplay");
  const closeBtn = document.getElementById("closeBtn");

  if (!overlay || !img || !closeBtn) {
    console.error("Missing HTML elements");
    return;
  }

  closeBtn.onclick = () => {
    overlay.style.display = "none";
  };

  const locations = [
    { name: "Paris", coords: [48.8566, 2.3522], photos: ["images/paris1.jpg", "images/paris2.jpg"] },
    { name: "London", coords: [51.5072, -0.1276], photos: ["images/london1.jpg", "images/london2.jpg"] },
    { name: "Dublin", coords: [53.3498, -6.2603], photos: ["images/dublin1.jpg", "images/dublin2.jpg"] },
    { name: "New York City", coords: [40.7128, -74.0060], photos: ["images/nyc1.jpg", "images/nyc2.jpg"] },
    { name: "Austin", coords: [30.2672, -97.7431], photos: ["images/austin1.jpg", "images/austin2.jpg"] },
    { name: "Lisbon", coords: [38.7223, -9.1393], photos: ["images/lisbon1.jpg", "images/lisbon2.jpg"] },
    { name: "Seville", coords: [37.3891, -5.9845], photos: ["images/seville1.jpg", "images/seville2.jpg"] },
    { name: "Barcelona", coords: [41.3851, 2.1734], photos: ["images/barcelona1.jpg", "images/barcelona2.jpg"] },
    { name: "Milan", coords: [45.4642, 9.1900], photos: ["images/milan1.jpg", "images/milan2.jpg"] },
    { name: "Vienna", coords: [48.2082, 16.3738], photos: ["images/vienna1.jpg", "images/vienna2.jpg"] },
    { name: "Athens", coords: [37.9838, 23.7275], photos: ["images/athens1.jpg", "images/athens2.jpg"] },
    { name: "Santorini", coords: [36.3932, 25.4615], photos: ["images/santorini1.jpg", "images/santorini2.jpg"] },
    { name: "Stockholm", coords: [59.3293, 18.0686], photos: ["images/stockholm1.jpg", "images/stockholm2.jpg"] },
    { name: "Lloret de Mar", coords: [41.7000, 2.8500], photos: ["images/lloret1.jpg", "images/lloret2.jpg"] },
    { name: "Portofino", coords: [44.3039, 9.2097], photos: ["images/portofino1.jpg", "images/portofino2.jpg"] },
    { name: "Florence", coords: [43.7696, 11.2558], photos: ["images/florence1.jpg", "images/florence2.jpg"] },
    { name: "Rome", coords: [41.9028, 12.4964], photos: ["images/rome1.jpg", "images/rome2.jpg"] },
    { name: "San Gimignano", coords: [43.4675, 11.0437], photos: ["images/sangimi1.jpg", "images/sangimi2.jpg"] },
    { name: "Tuscany", coords: [43.7711, 11.2486], photos: ["images/tuscany1.jpg", "images/tuscany2.jpg"] },
    { name: "Lake Como", coords: [46.0160, 9.2572], photos: ["images/como1.jpg", "images/como2.jpg"] },
    { name: "San Antonio TX", coords: [29.4241, -98.4936], photos: ["images/sanantonio1.jpg", "images/sanantonio2.jpg"] },
    { name: "Rockwall TX", coords: [32.9312, -96.4597], photos: ["images/rockwall1.jpg", "images/rockwall2.jpg"] },
    { name: "Honolulu", coords: [21.3069, -157.8583], photos: ["images/honolulu1.jpg", "images/honolulu2.jpg"] },
    { name: "Washington DC", coords: [38.9072, -77.0369], photos: ["images/dc1.jpg", "images/dc2.jpg"] },
    { name: "Montreux", coords: [46.4312, 6.9107], photos: ["images/montreux1.jpg", "images/montreux2.jpg"] },
    { name: "Reykjavik", coords: [64.1466, -21.9426], photos: ["images/iceland1.jpg", "images/iceland2.jpg"] },
    { name: "Dallas", coords: [32.7767, -96.7970], photos: ["images/dallas1.jpg", "images/dallas2.jpg"] },
    { name: "Meteora", coords: [39.7217, 21.6300], photos: ["images/meteora1.jpg", "images/meteora2.jpg"] },
    { name: "Quebec City", coords: [46.8139, -71.2080], photos: ["images/quebec1.jpg", "images/quebec2.jpg"] },
    { name: "Copenhagen", coords: [55.6761, 12.5683], photos: ["images/copenhagen1.jpg", "images/copenhagen2.jpg"] },
    { name: "Orlando FL", coords: [28.5383, -81.3792], photos: ["images/orlando1.jpg", "images/orlando2.jpg"] },
    { name: "Girona", coords: [41.9794, 2.8214], photos: ["images/girona1.jpg", "images/girona2.jpg"] }
  ];

  locations.forEach(place => {
    const marker = L.marker(place.coords).addTo(map);
    marker.bindTooltip(place.name);

    marker.on("click", () => {
      console.log("CLICK:", place.name);
      img.src = place.photos[0];
      overlay.style.display = "flex";
    });
  });

});
