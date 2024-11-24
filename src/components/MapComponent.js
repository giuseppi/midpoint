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
    <div style={{ height: '100%', width: '100%' }}>
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 12,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        <Marker
          longitude={-122.4}
          latitude={37.8}
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
