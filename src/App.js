import React from "react";
import "./style.css";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
export default class App extends React.Component {
  constructor() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXJhdmluZGhzaXZhIiwiYSI6ImNrZXZucXRsYjM5YjQyc21xdTE4dnFsZTEifQ.GxyMpdEOwDCSqe7wTtqd7g";
    var map = new mapboxgl.Map({
      container: "map",
      // center: [12.987486, 80.204590],
      // zoom:13,
      style: "mapbox://styles/mapbox/streets-v11"
    });
    var marker = new mapboxgl.Marker()
      .setLngLat([80.204590, 12.987486])
      .addTo(map);
  }
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <a href="https://www.latlong.net/c/?lat=12.987486&long=80.204590" target="_blank">(12.987486, 80.204590)</a>
      </div>
    );
  }
}
