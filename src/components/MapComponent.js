import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import Map, { Marker } from 'react-map-gl';

const MapComponent = () => {
  const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  if (!mapboxToken) {
    console.error('Mapbox access token is missing.');
    return <div>Error: Mapbox access token is not defined.</div>;
  }
  return (
    <Map
      mapboxAccessToken={mapboxToken}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};

export default MapComponent;
