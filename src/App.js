import React from 'react';
import { Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';

import './App.css';


function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shoppage} />
    </div>
  );
}

export default App;
