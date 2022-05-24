import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import AuthProvider from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
     <AppRouter />
     </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);