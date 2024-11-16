import React, { useState } from 'react';
import './App.css';
import Background from './components/background';
import Chess from './components/chess';

function App() {
  const [selectedProject, setSelectedProject] = useState('Background');

  return (
    <div>
      {selectedProject === 'Background' && (
        <Background onSelectProject={(project) => setSelectedProject(project)} />
      )}
      {selectedProject === 'Chess' && (
        <Chess onBack={() => setSelectedProject('Background')} />
      )}
    </div>
  );
}

export default App;
