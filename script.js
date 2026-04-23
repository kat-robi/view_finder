console.log("SCRIPT LOADED");

const map = L.map('map').setView([30, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const overlay = document.getElementById("photoOverlay");
const img = document.getElementById("photoDisplay");
const closeBtn = document.getElementById("closeBtn");

closeBtn.onclick = () => overlay.classList.add("hidden");

const basePath = ".";

const locations = [
  { name: "Paris", coords: [48.8566, 2.3522], photos: [`${basePath}/images/paris1.jpg`,`${basePath}/images/paris2.jpg`] },
  { name: "London", coords: [51.5072, -0.1276], photos: [`${basePath}/images/london1.jpg`,`${basePath}/images/london2.jpg`] },
  { name: "Dublin", coords: [53.3498, -6.2603], photos: [`${basePath}/images/dublin1.jpg`,`${basePath}/images/dublin2.jpg`] },
  { name: "New York City", coords: [40.7128, -74.0060], photos: [`${basePath}/images/nyc1.jpg`,`${basePath}/images/nyc2.jpg`] },
  { name: "Austin", coords: [30.2672, -97.7431], photos: [`${basePath}/images/austin1.jpg`,`${basePath}/images/austin2.jpg`] },
  { name: "Lisbon", coords: [38.7223, -9.1393], photos: [`${basePath}/images/lisbon1.jpg`,`${basePath}/images/lisbon2.jpg`] },
  { name: "Seville", coords: [37.3891, -5.9845], photos: [`${basePath}/images/seville1.jpg`,`${basePath}/images/seville2.jpg`] },
  { name: "Barcelona", coords: [41.3851, 2.1734], photos: [`${basePath}/images/barcelona1.jpg`,`${basePath}/images/barcelona2.jpg`] },
  { name: "Milan", coords: [45.4642, 9.1900], photos: [`${basePath}/images/milan1.jpg`,`${basePath}/images/milan2.jpg`] },
  { name: "Vienna", coords: [48.2082, 16.3738], photos: [`${basePath}/images/vienna1.jpg`,`${basePath}/images/vienna2.jpg`] },
  { name: "Athens", coords: [37.9838, 23.7275], photos: [`${basePath}/images/athens1.jpg`,`${basePath}/images/athens2.jpg`] },
  { name: "Santorini", coords: [36.3932, 25.4615], photos: [`${basePath}/images/santorini1.jpg`,`${basePath}/images/santorini2.jpg`] },
  { name: "Stockholm", coords: [59.3293, 18.0686], photos: [`${basePath}/images/stockholm1.jpg`,`${basePath}/images/stockholm2.jpg`] },
  { name: "Lloret de Mar", coords: [41.7000, 2.8500], photos: [`${basePath}/images/lloret1.jpg`,`${basePath}/images/lloret2.jpg`] },
  { name: "Portofino", coords: [44.3039, 9.2097], photos: [`${basePath}/images/portofino1.jpg`,`${basePath}/images/portofino2.jpg`] },
  { name: "Florence", coords: [43.7696, 11.2558], photos: [`${basePath}/images/florence1.jpg`,`${basePath}/images/florence2.jpg`] },
  { name: "Rome", coords: [41.9028, 12.4964], photos: [`${basePath}/images/rome1.jpg`,`${basePath}/images/rome2.jpg`] },
  { name: "San Gimignano", coords: [43.4675, 11.0437], photos: [`${basePath}/images/sangimi1.jpg`,`${basePath}/images/sangimi2.jpg`] },
  { name: "Tuscany", coords: [43.7711, 11.2486], photos: [`${basePath}/images/tuscany1.jpg`,`${basePath}/images/tuscany2.jpg`] },
  { name: "Lake Como", coords: [46.0160, 9.2572], photos: [`${basePath}/images/como1.jpg`,`${basePath}/images/como2.jpg`] },
  { name: "San Antonio TX", coords: [29.4241, -98.4936], photos: [`${basePath}/images/sanantonio1.jpg`,`${basePath}/images/sanantonio2.jpg`] },
  { name: "Rockwall TX", coords: [32.9312, -96.4597], photos: [`${basePath}/images/rockwall1.jpg`,`${basePath}/images/rockwall2.jpg`] },
  { name: "Honolulu", coords: [21.3069, -157.8583], photos: [`${basePath}/images/honolulu1.jpg`,`${basePath}/images/honolulu2.jpg`] },
  { name: "Washington DC", coords: [38.9072, -77.0369], photos: [`${basePath}/images/dc1.jpg`,`${basePath}/images/dc2.jpg`] },
  { name: "Montreux", coords: [46.4312, 6.9107], photos: [`${basePath}/images/montreux1.jpg`,`${basePath}/images/montreux2.jpg`] },
  { name: "Reykjavik", coords: [64.1466, -21.9426], photos: [`${basePath}/images/iceland1.jpg`,`${basePath}/images/iceland2.jpg`] },
  { name: "Dallas", coords: [32.7767, -96.7970], photos: [`${basePath}/images/dallas1.jpg`,`${basePath}/images/dallas2.jpg`] },
  { name: "Meteora", coords: [39.7217, 21.6300], photos: [`${basePath}/images/meteora1.jpg`,`${basePath}/images/meteora2.jpg`] },
  { name: "Quebec City", coords: [46.8139, -71.2080], photos: [`${basePath}/images/quebec1.jpg`,`${basePath}/images/quebec2.jpg`] },
  { name: "Copenhagen", coords: [55.6761, 12.5683], photos: [`${basePath}/images/copenhagen1.jpg`,`${basePath}/images/copenhagen2.jpg`] },
  { name: "Orlando FL", coords: [28.5383, -81.3792], photos: [`${basePath}/images/orlando1.jpg`,`${basePath}/images/orlando2.jpg`] },
  { name: "Girona", coords: [41.9794, 2.8214], photos: [`${basePath}/images/girona1.jpg`,`${basePath}/images/girona2.jpg`] }
];

locations.forEach(place => {
  const marker = L.marker(place.coords).addTo(map);
  marker.bindTooltip(place.name);

  marker.on("click", () => {
    console.log("CLICK:", place.name);

    const randomPhoto =
      place.photos[Math.floor(Math.random() * place.photos.length)];

    console.log("LOADING:", randomPhoto);

    img.src = randomPhoto;

    img.onerror = () => {
      console.error("IMAGE FAILED:", randomPhoto);
      img.src = `${basePath}/images/paris1.jpg`;
    };

    overlay.classList.remove("hidden");
  });
});
