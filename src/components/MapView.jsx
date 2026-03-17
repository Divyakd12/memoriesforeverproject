import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapView({ lat, lng }) {

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAP_KEY">

      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "300px"
        }}
        center={center}
        zoom={10}
      >

        <Marker position={center} />

      </GoogleMap>

    </LoadScript>
  );
}

export default MapView;