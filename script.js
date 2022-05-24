const walkRoute = [
  [-71.094, 42.356],//Shwarma shack
  [-71.069, 42.361],//MIT Superconducting Generator and High Voltage Lab
  [-71.099, 42.363], //Naco Tacos and the MIT Press Bookstore, also bus stop
  [-71.103, 42.365], //Supreme Liqors, Blick Art Materials, Dosas, and a bus stop
  [-71.106, 42.367], //YMCA, also bus stop
  [-71.111, 42.369] //Harvest of India, Sushi Restaurant, also bus stop
];


mapboxgl.accessToken = 'pk.eyJ1Ijoia211c2VybmFtZSIsImEiOiJjbDJzMDA0MHgwdTY4M2RxcjBteGJzY2RiIn0._ebcVlJDexIFA9FFnM4TlQ';


let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/kmusername/cl2s2wojn003h15nflaj8zqc7',
center: [-71.094481, 42.360014],
zoom: 14,
});


let marker = new mapboxgl.Marker().setLngLat([-71.094481, 42.360014]).addTo(map);


let counter = 0;
function move() {


setTimeout(() => {
  if (counter >= walkRoute.length) return;
  marker.setLngLat(walkRoute[counter]);
  counter++;
  move();
}, 1000);
}

if (typeof module !== 'undefined') {
module.exports = { move, counter, marker, walkRoute };
}
