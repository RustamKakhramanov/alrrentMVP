import ReactGA from 'react-ga4';
import { sendTelegramMessage } from '../services/telegram';

// Analytics configuration
const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
const YM_COUNTER_ID = import.meta.env.VITE_YM_COUNTER_ID;

// Initialize Google Analytics
if (GA_TRACKING_ID) {
  ReactGA.initialize(GA_TRACKING_ID);
}

/**
 * Track events across all analytics services
 */
export async function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  // Google Analytics tracking
  if (GA_TRACKING_ID) {
    ReactGA.event({
      category: 'User Interaction',
      action: eventName,
      ...eventParams
    });
  }

  // Yandex Metrika tracking
  if (window.ym && YM_COUNTER_ID) {
    window.ym(
      Number(YM_COUNTER_ID),
      'reachGoal',
      eventName,
      eventParams
    );
  }
  const excludedEvents = ['activity_select', 'feedback_submit'];

  // Send notification to Telegram bot
  try {
    if (!excludedEvents.includes(eventName)) {
      const message = formatTelegramMessage(eventName, eventParams);
      await sendTelegramMessage('Система', 'Аналитика', message);
    }
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
  }

  // Development logging
  if (import.meta.env.DEV) {
    console.log('Analytics Event:', {
      name: eventName,
      params: eventParams
    });
  }
}

/**
 * Format event data for Telegram message
 */
function formatTelegramMessage(eventName: string, params?: Record<string, any>): string {
  let message = `Событие: ${eventName}\n`;

  if (params) {
    switch (eventName) {
      case 'search_spaces':
        message += `Параметры поиска:
Локация: ${params.location || 'Не указана'}
Дата: ${params.date || 'Не указана'}
Тип: ${params.spaceType || 'Любой'}`;
        break;

      case 'user_registration':
      case 'user_login':
        message += `Метод: ${params.method}`;
        break;

      case 'space_view':
        message += `Помещение: ${params.spaceTitle}
ID: ${params.spaceId}
Локация: ${params.spaceLocation}`;
        break;

      case 'host_signup':
        message += `Источник: ${params.source}`;
        break;

      case 'booking_attempt':
        message += `Помещение: ${params.spaceTitle}
Дата начала: ${params.startDate}
Дата окончания: ${params.endDate}
Время: ${params.startTime} - ${params.endTime}`;
        break;

      case 'activity_select':
        message += `Активность: ${params.activityId}
Название: ${params.activityName}
Источник: ${params.source || 'Не указан'}`;
        break;

      case 'filter_apply':
        message += `Тип фильтра: ${params.filterType}
Результатов: ${params.resultsCount || 'Не указано'}`;
        break;

      case 'location_select':
        message += `Локация: ${params.location}`;
        break;

      default:
        message += `Параметры: ${JSON.stringify(params, null, 2)}`;
    }
  }

  return message;
}

/**
 * Track page views
 */
export function trackPageView(path: string) {
  // Google Analytics page view
  if (GA_TRACKING_ID) {
    ReactGA.send({
      hitType: 'pageview',
      page: path
    });
  }

  // Yandex Metrika page view
  if (window.ym && YM_COUNTER_ID) {
    window.ym(
      Number(YM_COUNTER_ID),
      'hit',
      path
    );
  }

  // Development logging
  if (import.meta.env.DEV) {
    console.log('Page View:', path);
  }
}

/**
 * Set user properties
 */
export function setUserProperties(properties: Record<string, any>) {
  if (GA_TRACKING_ID) {
    ReactGA.set(properties);
  }
}

/**
 * Track exceptions
 */
export function trackException(description: string, fatal: boolean = false) {
  if (GA_TRACKING_ID) {
    ReactGA.event({
      category: 'Error',
      action: 'Exception',
      label: description,
      fatal
    });
  }
}