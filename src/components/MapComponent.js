import { APIProvider, Map } from '@vis.gl/react-google-maps';
import React from 'react';

const googleMapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  return (
    <APIProvider apiKey={googleMapsKey}>
      <Map
        style={{ height: '90vh' }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        options={{ styles: darkModeStyles }}
      />
    </APIProvider>
  );
};

export default MapComponent;

const darkModeStyles = [
  { elementType: 'geometry', stylers: [{ color: '#242526' }] }, // Dark but warm land color
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#d1d1d1' }] }, // Softer white text
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1c1c1e' }] }, // Matches dark land background
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#1a2833' }] }, // Deep muted blue for water
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#3a3a3c' }] }, // Dark grey roads
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#48484a' }] }, // Slightly lighter stroke for visibility
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#505053' }] }, // Slightly lighter highways
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#636366' }] }, // Highway borders
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#b8b8b8' }] }, // Softer place-of-interest labels
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2e2e30' }] }, // Dark transit lines
];
