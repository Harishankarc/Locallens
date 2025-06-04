// components/InteractiveMap.js
"use client"; // If using App Router

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function WorldMap() {
  return (
    <div className="w-1/2 h-1/3">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
