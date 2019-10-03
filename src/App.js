import React from 'react';
import './App.css';

import { Route} from 'react-router-dom';

import Homepage from './pages/homepage.comonent';

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
