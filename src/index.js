const buildMarker = require("./marker");
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoibWljaGFlbGhvbmdzYW0iLCJhIjoiY2pkMXc0a2pnMjQ0ODJ4bjJpc2hxOXE3byJ9.rSTpMTBlv1TEeVOj-npJ1w";

const map = new mapboxgl.Map({
	container: "map",
	center: [-74.009, 40.705], // FullStack NY coordinates
	zoom: 12, // starting zoom
	style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});



const marker = buildMarker("activity", [-74.009151, 40.705086])
marker.addTo(map);