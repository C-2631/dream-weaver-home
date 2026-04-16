import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import type { Property } from "@/data/properties";

// Custom gold pin
const goldIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:34px;height:34px;border-radius:50%;
    background: linear-gradient(135deg,#D4A853,#FF6B4A);
    box-shadow: 0 0 0 6px rgba(212,168,83,0.18), 0 4px 12px rgba(0,0,0,0.5);
    display:flex;align-items:center;justify-content:center;
    color:#1a1410;font-weight:600;font-size:14px;
    border: 2px solid rgba(255,255,255,0.5);
  ">◆</div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
});

const PropertyMap = ({ properties, height = "100%" }: { properties: Property[]; height?: string }) => {
  const center: [number, number] = properties.length
    ? [properties[0].lat, properties[0].lng]
    : [40, -20];

  return (
    <div style={{ height }} className="w-full rounded-2xl overflow-hidden glass relative">
      <MapContainer center={center} zoom={2} className="w-full h-full" style={{ background: "#0c0c0d" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap, &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {properties.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={goldIcon}>
            <Popup className="!bg-transparent">
              <div className="min-w-[200px]">
                <img src={p.image} alt={p.title} className="w-full h-24 object-cover rounded-md mb-2" />
                <p className="font-display text-base text-foreground">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.city}</p>
                <p className="text-primary font-medium mt-1">${p.price.toLocaleString()}</p>
                <Link to={`/property/${p.slug}`} className="text-xs text-primary underline mt-2 inline-block">
                  View details →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
