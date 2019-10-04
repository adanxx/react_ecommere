import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.util';

import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: 'test@gmail.com',
            password : '1234'
        }
    }

    handSubmit = event =>{
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handChange = event => {
      const {value, name} = event.target;

      this.setState({[name]: value})
    }

    render(){

        return(
            <div className="sign-in">
               <h2> Already Have an Account</h2>
              <span>Sign-in with Email and Password</span>
               
              <form onSubmit={this.handSubmit}>
                 <FormInput 
                     name='email' 
                     type='email'
                     handleChange={this.handChange} 
                     value={this.state.email} 
                     label='email'
                     required
                   /> 
                 <FormInput 
                     name='password' 
                     type='password'
                     handleChange={this.handChange} 
                     value={this.state.password} 
                     label='password'
                     required
                   /> 
                 <div className='buttons'>
                   <CustomButton type="submit">Sign In</CustomButton>
                   <CustomButton onClick={signInWithGoogle}  isGoogleSignin={true} >{''}Sign With Google{''}</  CustomButton>
                 </div>
               
              </form>
            </div>
        )
    }
}

export default SignIn;