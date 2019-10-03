import React from 'react';
import { Route} from 'react-router-dom';
import Homepage from './pages/homepage.component';

import './App.css';


function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
