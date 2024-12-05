import React, { useCallback } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { Space } from '../../types/space';

const ALMALY_CENTER = {
  lat: 43.251484,
  lng: 76.928732
};

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
} as const;

const defaultMapOptions = {
  zoom: 14,
  center: ALMALY_CENTER,
  disableDefaultUI: true,
  zoomControl: true,
  restriction: {
    latLngBounds: {
      north: 43.271484,
      south: 43.231484,
      east: 76.948732,
      west: 76.908732
    },
    strictBounds: true,
  },
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ]
};

interface SearchMapProps {
  spaces: Space[];
  selectedSpace: number | null;
  onSpaceSelect: (id: number) => void;
  center?: { lat: number; lng: number } | null;
}

export function SearchMap({ spaces, selectedSpace, onSpaceSelect, center }: SearchMapProps) {
  const onLoad = useCallback((map: google.maps.Map) => {
    if (center) {
      map.setCenter(center);
      map.setZoom(15);
    } else {
      const bounds = new window.google.maps.LatLngBounds(
        { lat: 43.231484, lng: 76.908732 },
        { lat: 43.271484, lng: 76.948732 }
      );
      map.fitBounds(bounds);
      
      const listener = google.maps.event.addListener(map, 'idle', () => {
        if (map.getZoom()! > 15) {
          map.setZoom(15);
        }
        google.maps.event.removeListener(listener);
      });
    }
  }, [center]);

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      options={defaultMapOptions}
      onLoad={onLoad}
    >
      {spaces.map((space) => (
        <Marker
          key={space.id}
          position={{
            lat: space.coordinates[1],
            lng: space.coordinates[0]
          }}
          onClick={() => onSpaceSelect(space.id)}
          label={{
            text: `${space.price.toLocaleString()} ₸`,
            className: `
              px-3 py-1.5 rounded-full cursor-pointer transition-all
              ${selectedSpace === space.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-900'
              }
            `
          }}
        />
      ))}
    </GoogleMap>
  );
}