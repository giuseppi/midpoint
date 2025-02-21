import mapboxgl from 'mapbox-gl';
import { MapboxStyleSwitcherControl } from 'mapbox-gl-style-switcher';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useRef } from 'react';
import Map, { Marker } from 'react-map-gl';

const MapComponent = () => {
  const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l1c2VwcGkiLCJhIjoiY20zdGFqOW91MDVuMTJrbzlsZ2t0d3F3eiJ9.b9YtUGXY_2WXxHeChPJc9A';

    const styles = [
      {
        title: 'Dark',
        uri: 'mapbox://styles/mapbox/dark-v11',
      },
      {
        title: 'Light',
        uri: 'mapbox://styles/mapbox/standard',
      },
    ];

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/standard',
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

    mapRef.current.addControl(new MapboxStyleSwitcherControl(styles));

    return () => {
      mapRef.current.remove();
    };
  }, []);

  if (!mapboxToken) {
    console.error('Mapbox access token is missing.');
    return <div>Error: Mapbox access token is not defined.</div>;
  }

  return (
    <div
      id="map"
      ref={mapContainerRef}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      style={{ width: '100%', height: '90%', border: '2px solid white' }}
    ></div>
  );
};

export default MapComponent;
