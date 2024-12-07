import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AppContent } from './AppContent';
import { trackPageView } from './utils/analytics';

function AppWithAnalytics() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return <AppContent />;
}

function App() {
  return (
    <Router>
      <AppWithAnalytics />
    </Router>
  );
}

export default App;