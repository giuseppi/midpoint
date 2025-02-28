import { APIProvider, Map } from '@vis.gl/react-google-maps';
import React, { useCallback, useState } from 'react';
import MapHooks from './MapHooks';

const googleMapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  const [userPosition, setUserPosition] = useState(null);

  // Wrap `setUserPosition` in useCallback to prevent re-creation on re-renders
  const handleLocationUpdate = useCallback((position) => {
    setUserPosition(position);
  }, []);

  return (
    <APIProvider apiKey={googleMapsKey}>
      <MapHooks onLocationUpdate={handleLocationUpdate} />
      <Map
        key={userPosition ? `${userPosition.lat}-${userPosition.lng}` : 'default'}
        style={{ height: '90vh' }}
        defaultCenter={userPosition || { lat: 33.6846, lng: -117.8265 }} // Use user location if available
        defaultZoom={12}
        options={{ styles: darkModeStyles }}
      />
    </APIProvider>
  );
};

export default MapComponent;

const darkModeStyles = [
  { elementType: 'geometry', stylers: [{ color: '#242526' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#d1d1d1' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1c1c1e' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#1a2833' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#3a3a3c' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#48484a' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#505053' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#636366' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#b8b8b8' }] },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2e2e30' }] },
];
