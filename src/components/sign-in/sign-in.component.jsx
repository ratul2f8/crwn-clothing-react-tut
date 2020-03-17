import React from "react"
import "./sign-in.component.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { auth,signInWithGoogle } from "../firebase/firebase.utils"
class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }
 handleSubmit = async event => {
    event.preventDefault()
    const { email,password } = this.state;
    try{
      auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'',password:''})
    }catch(error)
    {
     console.log(error.message)
    }
    
 }

 handleChange = (event) => {
     const {name,value} = event.target
     this.setState({[name]:value})
 }

   render(){
       return (
           <div className="sign-in">
              <h2>I already have an account</h2>
              <span>Sign in with your email and password</span>
              
              <form onSubmit={this.handleSubmit}>
                  <FormInput name="email" onChange = {this.handleChange}
                  type="email" required value= {this.state.email} label="email" 
                  />
    
                  <FormInput name="password" type="password" onChange={this.handleChange} 
                  required value= {this.state.password} label="password"
                  />

                  <CustomButton type="submit">Sign in</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    {' '} Sign in with Google {' '}</CustomButton>
              </form>
           </div>
       )
   }
}

export default SignIn;