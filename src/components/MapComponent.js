import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import Map, { Marker } from 'react-map-gl';

const MapComponent = () => {
  const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  if (!mapboxToken) {
    console.error('Mapbox access token is missing.');
    return <div>Error: Mapbox access token is not defined.</div>;
  }

  const initialView = {
    longitude: -117.8265,
    latitude: 33.6846,
    zoom: 12,
  };

  const initialMarker = {
    longitude: initialView.longitude + 0.01, // Shift slightly east
    latitude: initialView.latitude - 0.01, // Shift slightly south
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={initialView}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        <Marker
          longitude={initialMarker.longitude}
          latitude={initialMarker.latitude}
        >
          <div
            style={{
              background: 'red',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
            }}
          />
        </Marker>
      </Map>
    </div>
  );
};

export default MapComponent;
