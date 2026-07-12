

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'
//import as parkData from '.data/skateboard-parks.json';
import './index.css';

const position = [30.267153, -97.743057]
const position1 = [30.264216798050104, -97.73970083068926]
const position2 = [30.2630247091912, -97.72446056931075]
// const position3 = [30.267153, -97.743057]

function Map() {
  return(
      <div>
    <MapContainer style={{ height: "250px", width: "100%" }} center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

< Marker position = {position}>
<Popup>
Austin, TX <br /> ALL the cool SXSW Events March 11th-20th!
</Popup>
</Marker>


    </MapContainer>
<br />

<MapContainer style={{ height: "250px", width: "100%" }} center={position1} zoom={16} scrollWheelZoom={false}>
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

< Marker position = {position1}>
<Popup>
Austin Convention Center <br />The Center of SXSW Austin Convention Center
</Popup>
</Marker>


</MapContainer>
<br />
<MapContainer style={{ height: "250px", width: "100%" }} center={position2} zoom={16} scrollWheelZoom={false}>
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

< Marker position = {position2}>
<Popup>
Zilker Brewing <br />Live Show in The Park March 11th
</Popup>
</Marker>


</MapContainer>


</div>
  )
} 

export default Map