import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import { SearchResults } from '../components/SearchResults';
import { SearchFilters } from '../components/SearchFilters';
import { ArrowLeft } from 'lucide-react';
import { SPACES } from '../data/spaces';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWxscmVudCIsImEiOiJjbHRwOWF1NWowMDFqMnFxdmQyNnBqcXNnIn0.Zy-YXQwW0jF7Jx9Y3K4yqw';

const ALMATY_COORDINATES = {
  latitude: 43.238949,
  longitude: 76.889709,
};

export function Search() {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
  const [searchResults, setSearchResults] = useState(Object.values(SPACES));
  const [viewport, setViewport] = useState({
    ...ALMATY_COORDINATES,
    zoom: 12
  });

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activity = searchParams.get('activity');

  useEffect(() => {
    if (activity) {
      const filteredResults = Object.values(SPACES).filter(space => 
        space.title.toLowerCase().includes(activity.toLowerCase())
      );
      setSearchResults(filteredResults.length > 0 ? filteredResults : Object.values(SPACES));
    }
  }, [activity]);

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            На главную
          </Link>
          <div className="text-sm text-gray-500">
            Найдено: {searchResults.length} помещений
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[600px] flex-shrink-0 overflow-auto">
          <SearchFilters />
          <SearchResults 
            spaces={searchResults}
            selectedSpace={selectedSpace}
            onSpaceSelect={setSelectedSpace}
          />
        </div>
        
        <div className="hidden lg:block flex-1 relative">
          <Map
            {...viewport}
            onMove={evt => setViewport(evt.viewState)}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <NavigationControl position="top-right" />
            {searchResults.map((space) => (
              <Marker
                key={space.id}
                longitude={space.coordinates[0]}
                latitude={space.coordinates[1]}
                anchor="bottom"
                onClick={e => {
                  e.originalEvent.stopPropagation();
                  setSelectedSpace(space.id);
                  navigate(`/spaces/${space.id}`);
                }}
              >
                <div
                  className={`
                    px-3 py-1.5 rounded-full cursor-pointer transition-all
                    ${selectedSpace === space.id 
                      ? 'bg-blue-600 text-white scale-110 shadow-lg' 
                      : 'bg-white text-gray-900 shadow-md hover:scale-105'
                    }
                  `}
                >
                  {space.price.toLocaleString()} ₸
                </div>
              </Marker>
            ))}
          </Map>
        </div>
      </div>
    </div>
  );
}