const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "YOUR API TOKEN HERE";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);



const selectArr = [...document.getElementsByTagName('select')];


fetch('/api')
  .then(result => result.json())
  .then(data => {
      let parent = selectArr[0];

      for (index in data.hotels) {
        let hotelOption = new Option(data.hotels[index].name, data.hotels[index].name)
        parent.appendChild(hotelOption);
      }



  });
