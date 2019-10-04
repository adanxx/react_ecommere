import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';

import './App.css';


function App() {
  return (
    <div>
     <Header/>
     <Switch>
       <Route exact path="/" component={Homepage} />
       <Route exact path="/shop" component={Shoppage} />
     </Switch>
    
    </div>
  );
}

export default App;
