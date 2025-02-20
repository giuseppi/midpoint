import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';

const MapComponent = () => {
  const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          console.log({ latitude, longitude }); // Verify that latitude and longitude are correct
        },
        (error) => {
          console.error('Error getting user location: ', error);
          setUserLocation({ latitude: 33.6846, longitude: -117.8265 }); // Default location
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (!mapboxToken) {
    console.error('Mapbox access token is missing.');
    return <div>Error: Mapbox access token is not defined.</div>;
  }

  const initialView = {
    longitude: userLocation?.longitude || -117.8265, // Default longitude
    latitude: userLocation?.latitude || 33.6846, // Default latitude
    zoom: 12,
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={initialView}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        {userLocation && (
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
          >
            <div
              style={{
                backgroundColor: 'red',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: '2px solid white',
              }}
            />
          </Marker>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;
