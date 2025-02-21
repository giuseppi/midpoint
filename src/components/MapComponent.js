import { APIProvider, Map } from '@vis.gl/react-google-maps';
import React from 'react';

const googleMapsKey = process.env.VITE_APP_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  return (
    <APIProvider apiKey={googleMapsKey}>
      <Map
        style={{ height: '90vh' }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
      {console.log(GOOGLE_MAPS_API_KEY)}
    </APIProvider>
  );
};

export default MapComponent;
