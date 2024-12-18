import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CONTENT_TYPES } from '../config/contentTypes';
import { setCookie, getCookie } from '../utils/cookies';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';

export function useSpaceType() {
  const [searchParams] = useSearchParams();
  const [spaceType, setSpaceType] = useState<string | null>(() => {
    const savedType = getCookie('spaceType');
    return savedType && CONTENT_TYPES[savedType] ? savedType : 'default';
  });

  useEffect(() => {
    const typeParam = searchParams.get('type');
    
    if (typeParam && CONTENT_TYPES[typeParam]) {
      // Track space type selection from URL
      trackEvent(analyticsConfig.googleAnalytics.events.activitySelect, {
        activityId: typeParam,
        source: 'url_parameter'
      });
      
      setSpaceType(typeParam);
      setCookie('spaceType', typeParam);
    } else if (!typeParam && spaceType !== 'default') {
      const savedType = getCookie('spaceType');
      if (savedType && CONTENT_TYPES[savedType]) {
        setSpaceType(savedType);
      }
    }
  }, [searchParams]);

  return {
    spaceType,
    content: CONTENT_TYPES[spaceType || 'default']
  };
}