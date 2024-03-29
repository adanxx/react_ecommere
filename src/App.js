import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import Checkout from './components/checkout/checkout.component';

import './App.css';
import {connect} from 'react-redux';
import {setCurrentUser } from './redux/user/user-action';


class App extends React.Component {

  unsubscribeFormAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFormAuth = auth.onAuthStateChanged( async userAuth =>{
     
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);         
        userRef.onSnapshot(snapShot =>{


          setCurrentUser(
             { id: snapShot.id,
             ...snapShot.data()
             }
           )
        });
      
      }

      setCurrentUser(userAuth)
    
    
    })
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  

  render(){
      return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={Shoppage} />
          <Route exact path="/signin" render ={()=> this.props.currentUser ? (<Redirect to="/" />): (<SignInAndSignUpPage/>)}/>
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
    </div>
   );
  }
}

const mapStateProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateProps,mapDispatchToProps )(App);
