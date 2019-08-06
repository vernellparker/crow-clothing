import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email: '', password:''})
    };

    handleChange = event =>{
        //dynamically sets value if state matching html name attributes and value attributes
      const {value, name} = event.target;
      this.setState({[name]: value})
    };
render() {
        return(
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label={'email'} name={'email'} handleChange={this.handleChange} type={'email'} value={this.state.email} required/>
                    <FormInput label={'password'} name={'password'} handleChange={this.handleChange} type={'password'} value={this.state.password} required/>
                    <div className={'buttons'}>
                        <CustomButton type={'submit'}>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={'true'}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
}

}
export default  SignIn