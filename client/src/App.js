import React, { useEffect } from 'react';
import { navigate, Router } from '@reach/router';  
import Main from './views/Main';
import Manage from './views/Manage';
import AddPlayer from './views/AddPlayer';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Manage path="/edit" />
        <AddPlayer path="/create" />
      </Router>
    </div>
  );
}

export default App;
