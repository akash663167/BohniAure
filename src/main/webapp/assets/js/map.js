var map = L.map("mapid").setView([20.5937, 78.9629], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "",
}).addTo(map);

L.marker([20.5937, 78.9629]).addTo(map).bindPopup("India").openPopup();
