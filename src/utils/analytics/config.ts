// Analytics configuration
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
export const YM_COUNTER_ID = import.meta.env.VITE_YM_COUNTER_ID;

export const events = {
  search: 'search_spaces',
  registration: 'user_registration',
  login: 'user_login',
  spaceView: 'space_view',
  hostSignup: 'host_signup',
  activitySelect: 'activity_select',
  dateSelect: 'date_select',
  filterApply: 'filter_apply',
  footerLinkClick: 'footer_link_click',
  feedbackSubmit: 'feedback_submit',
  locationSelect: 'location_select'
} as const;