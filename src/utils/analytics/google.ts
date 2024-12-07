import ReactGA from 'react-ga4';
import { GA_TRACKING_ID } from './config';

export function initializeGA() {
  if (GA_TRACKING_ID) {
    ReactGA.initialize(GA_TRACKING_ID);
  }
}

export function trackGAEvent(eventName: string, eventParams?: Record<string, any>) {
  if (GA_TRACKING_ID) {
    ReactGA.event({
      category: 'User Interaction',
      action: eventName,
      ...eventParams
    });
  }
}

export function trackGAPageView(path: string) {
  if (GA_TRACKING_ID) {
    ReactGA.send({
      hitType: 'pageview',
      page: path
    });
  }
}

export function setGAUserProperties(properties: Record<string, any>) {
  if (GA_TRACKING_ID) {
    ReactGA.set(properties);
  }
}

export function trackGAException(description: string, fatal: boolean = false) {
  if (GA_TRACKING_ID) {
    ReactGA.event({
      category: 'Error',
      action: 'Exception',
      label: description,
      fatal
    });
  }
}