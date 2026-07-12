import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'
//import as parkData from '.data/skateboard-parks.json';
import './App.css';

const position = [30.267153, -97.743057]
function App() {
  return(
    <MapContainer style={{ height: "450px", width: "100%" }} center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
< Marker position = {position}>
<Popup>
Austin, TX <br /> ALL the cool SXSW Events happening now!
</Popup>
</Marker>
    </MapContainer>
  )
} 

export default App;


//data folder would be imported above with an * -->data being the database
//also the app.css would be changed to reflect whatever size you need it to be.