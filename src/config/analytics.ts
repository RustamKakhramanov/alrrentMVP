export const analyticsConfig = {
  googleAnalytics: {
    trackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
    events: {
      search: 'search_spaces',
      registration: 'user_registration',
      login: 'user_login',
      spaceView: 'space_view',
      hostSignup: 'host_signup',
      activitySelect: 'activity_select',
      dateSelect: 'date_select',
      filterApply: 'filter_apply',
      footerLinkClick: 'footer_link_click',
      bookingAttempt: 'bookingAttempt',
      feedbackSubmit: 'feedback_submit'
    }
  },
  yandexMetrika: {
    counterId: import.meta.env.VITE_YM_COUNTER_ID || '',
    events: {
      search: 'search_spaces',
      registration: 'user_registration',
      login: 'user_login',
      spaceView: 'space_view',
      hostSignup: 'host_signup',
      activitySelect: 'activity_select',
      dateSelect: 'date_select',
      filterApply: 'filter_apply',
      footerLinkClick: 'footer_link_click',
      feedbackSubmit: 'feedback_submit'
    }
  }
};