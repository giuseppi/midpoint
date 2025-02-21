import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useRef } from 'react';
import Map, { Marker } from 'react-map-gl';

const MapComponent = () => {
  const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l1c2VwcGkiLCJhIjoiY20zdGFqOW91MDVuMTJrbzlsZ2t0d3F3eiJ9.b9YtUGXY_2WXxHeChPJc9A';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-24, 42],
      zoom: 1,
    });

    // Add geolocate control to the map.
    mapRef.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    return () => {
      mapRef.current.remove();
    };
  }, []);

  if (!mapboxToken) {
    console.error('Mapbox access token is missing.');
    return <div>Error: Mapbox access token is not defined.</div>;
  }

  // const initialView = {
  //   longitude: userLocation?.longitude || -117.8265, // Default longitude
  //   latitude: userLocation?.latitude || 33.6846, // Default latitude
  //   zoom: 12,
  // };

  return (
    // <div style={{ height: '100%', width: '100%' }}>
    //   <Map
    //     mapboxAccessToken={mapboxToken}
    //     // initialViewState={initialView}
    //     style={{ width: '100%', height: '100%' }}
    //     mapStyle="mapbox://styles/mapbox/dark-v10"
    //   >
    //     {userLocation && (
    //       <Marker
    //         longitude={userLocation.longitude}
    //         latitude={userLocation.latitude}
    //       >
    //         <div
    //           style={{
    //             backgroundColor: 'red',
    //             width: '10px',
    //             height: '10px',
    //             borderRadius: '50%',
    //             border: '2px solid white',
    //           }}
    //         />
    //       </Marker>
    //     )}
    //   </Map>
    // </div>
    <div
      id="map"
      ref={mapContainerRef}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      style={{ width: '100%', height: '90%', border: '2px solid white' }}
    ></div>
  );
};

export default MapComponent;
