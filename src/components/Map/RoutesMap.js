import { Map, GoogleApiWrapper } from "google-maps-react";

const RoutesMap = (props) => {
  const stops = props.filteredData[0]?.stops;

  const onMapReady = (mapProps, map) => {
    let coords = [];
    let waypoints = [];

    stops?.map((place) => coords.push({ lat: place.lat, lng: place.lng }));

    const directionsService = new window.google.maps.DirectionsService();
    const directionsDisplay = new window.google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    let start = { lat: coords[0].lat, lng: coords[0].lng };
    let end = {
      lat: coords[coords.length - 1].lat,
      lng: coords[coords.length - 1].lng,
    };
    for (let i = 1; i < coords.length - 1; i++) {
      waypoints.push({
        location: { lat: coords[i].lat, lng: coords[i].lng },
        stopover: true,
      });
    }
    let request = {
      origin: start,
      waypoints: waypoints,
      destination: end,
      travelMode: "DRIVING",
    };
    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        directionsDisplay.setDirections(result);
      }
    });
  };
  return (
    <div>
      <Map
        className="map"
        initialCenter={{ lat: 28.679, lng: 77.0697 }}
        google={props.google}
        onReady={onMapReady}
        style={{ height: "80%", position: "relative", width: "80%" }}
        zoom={8}
      ></Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCsYeUOMZc46HlZhnnhdTue-sXBd007_qk",
  version: "3.40",
})(RoutesMap);
