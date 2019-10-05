import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import './App.css';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
       currentUser: null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount(){
    this.unsubscribeFormAuth = auth.onAuthStateChanged( async user =>{
   
      createUserProfileDocument(user);
      
      // this.setState({currentUser: user});
      // console.log(this.state.currentUser);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  

  render(){
      return (
    <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
    </div>
   );
  }


}

export default App;
