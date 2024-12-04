import { analyticsConfig } from '../config/analytics';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    ym?: (counterId: number, event: string, eventName: string) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // Google Analytics tracking
  if (window.gtag && analyticsConfig.googleAnalytics.trackingId) {
    window.gtag('event', eventName, eventParams);
  }

  // Yandex Metrika tracking
  if (window.ym && analyticsConfig.yandexMetrika.counterId) {
    window.ym(
      Number(analyticsConfig.yandexMetrika.counterId),
      'reachGoal',
      eventName,
      eventParams
    );
  }
};