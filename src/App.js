import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const is_authenticated = JSON.parse(localStorage.getItem('is_authenticated')); 

  useEffect(() => {
    setIsAuthenticated(is_authenticated);
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
