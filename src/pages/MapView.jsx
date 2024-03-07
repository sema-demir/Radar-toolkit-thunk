import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { icon } from "leaflet";

const MapView = ({ setDetailId }) => {
  const flightstate = useSelector((store) => store.flightReducer);

  //Marker iconu olusturmak için
  const planeIcon = icon({
    iconUrl: "/plane-icon.png",
    iconSize: [30, 30],
  });
  return (
    <MapContainer
      center={[38.948771, 35.425597]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* ucus verisi kadar ekrana imlec bas */}
      {flightstate.flights.map((flight) => (
        <Marker
          icon={planeIcon}
          key={flight.id}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="d-flex flex-column gap-1">
              <span>Kod:{flight.code} </span>
              <button
                onClick={() => {
                  setDetailId(flight.id);
                }}
                className="w-100"
              >
                Detay
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
