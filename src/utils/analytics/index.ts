import { initializeGA, trackGAEvent, trackGAPageView, setGAUserProperties, trackGAException } from './google';
import { YandexMetrika, trackYMEvent, trackYMPageView } from './yandex';
import { events } from './config';

// Initialize Google Analytics
initializeGA();

// Export Yandex Metrika component
export { YandexMetrika };

// Export events configuration
export { events };

/**
 * Track events across all analytics services
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  trackGAEvent(eventName, eventParams);
  trackYMEvent(eventName, eventParams);

  if (import.meta.env.DEV) {
    console.log('Analytics Event:', { name: eventName, params: eventParams });
  }
}

/**
 * Track page views across all analytics services
 */
export function trackPageView(path: string) {
  trackGAPageView(path);
  trackYMPageView(path);

  if (import.meta.env.DEV) {
    console.log('Page View:', path);
  }
}

/**
 * Set user properties in analytics services
 */
export function setUserProperties(properties: Record<string, any>) {
  setGAUserProperties(properties);
}

/**
 * Track exceptions in analytics services
 */
export function trackException(description: string, fatal: boolean = false) {
  trackGAException(description, fatal);
}