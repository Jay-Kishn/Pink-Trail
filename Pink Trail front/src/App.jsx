import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


function LocationMarker() {
  const [markerPositionArr, addMarkerPosition] = useState([]);
  const map = useMapEvents({
    click(e){
      const {lat,lng} = e.latlng;
      const coord  = [
        lat,lng
      ];
      addMarkerPosition([...markerPositionArr,coord]);
    },
  });

  return  (
    markerPositionArr.length > 0 &&
    markerPositionArr.map((position, index) => (
      <Marker  position={markerPositionArr[index]} />
    ))
 )
}

function App() {
  

  return (
    <div className="App">
      <h1>Leaflet Map with React</h1>
      <MapContainer center={[26.867667, 75.807973]} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[26.867667, 75.807973]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <LocationMarker />
</MapContainer>
    </div>
  );
}

export default App;




