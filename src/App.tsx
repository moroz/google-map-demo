import "./App.css";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const WARSAW_CENTRAL = {
  lat: 52.22901769567979,
  lng: 21.00323072731575
};

const RASOI = {
  lat: 52.22950007956543,
  lng: 20.999896169143675
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_TOKEN }}
        defaultCenter={WARSAW_CENTRAL}
        defaultZoom={18}
      >
        <Marker
          lat={WARSAW_CENTRAL.lat}
          lng={WARSAW_CENTRAL.lng}
          text="Shitty communist railway station"
        />
        <Marker
          lat={RASOI.lat}
          lng={RASOI.lng}
          text="Rasoi Indian Restaurant"
        />
      </GoogleMapReact>
    </div>
  );
}

export default App;
