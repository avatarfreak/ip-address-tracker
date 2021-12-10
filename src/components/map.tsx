import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

interface IMap {
  location: {
    lat: number;
    lng: number;
  };
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const icon = new Icon({
  iconUrl: `${prefix}/images/icon-location.svg`,
  iconAnchor: [12, 41],
});

const MapViewer: React.FC<IMap> = ({ location }) => {
  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[location.lat, location.lng]} icon={icon} />
    </MapContainer>
  );
};

export default MapViewer;
