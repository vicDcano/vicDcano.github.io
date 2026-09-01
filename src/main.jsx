import React from 'react';
import ReactDOM from 'react-dom/client';
import ProjectsApp from './ProjectsApp'; // Points to your ProjectsApp.jsx file

ReactDOM.createRoot(document.getElementById('react-project-root')).render(
  <React.StrictMode>
    <ProjectsApp />
  </React.StrictMode>
);