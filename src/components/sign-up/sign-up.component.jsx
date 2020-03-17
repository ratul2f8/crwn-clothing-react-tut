import React from "react"
import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component"
import { auth,userAuthDocument } from "../firebase/firebase.utils"
import CustomButton from "../custom-button/custom-button.component"

class SignUp extends React.Component{
    constructor(){
        super()
        
        this.state= {
            displayName : '',
            password: '',
            email:'',
            confirmPassword :''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName,email,password,confirmPassword } = this.state
        if(password !== confirmPassword){
            alert("Password don't match")
            return
        }
        try{
         const { user } = await auth.createUserWithEmailAndPassword(
             email,
             password
         )
        await userAuthDocument( user, { displayName })
        this.setState({
            displayName : '',
            password: '',
            email:'',
            confirmPassword :''
        })
        }
        catch(error){
            console.log('error happened')
            console.log(error.message)
        }
    }
 
    handleChange = event => {
        const { name,value } = event.target
        this.setState({[name]:value})
    }

    render(){
        const { email,password,confirmPassword,displayName } = this.state;
        return (
            <div className = 'sign-up' >
             <h2 className="title">
                 I don't have a account
             </h2>
             <span>Sign up with your email and password</span>
             <form onSubmit={this.handleSubmit} className="sign-up-form">
                 <FormInput name="displayName"
                 type='text'
                 label="Display Name "
                 value={displayName}
                 required
                 onChange = {this.handleChange}
                 />
                <FormInput name="email"
                type='email'
                 label="Email "
                 value={email}
                 required
                 onChange = {this.handleChange}
                 />
                 <FormInput name="password"
                 type='password'
                 label="Password "
                 value={password}
                 required
                 onChange = {this.handleChange}
                 />
                  <FormInput name="confirmPassword"
                  type='password'
                 label="Confirm Password"
                 value={confirmPassword}
                 required
                 onChange = {this.handleChange}
                 />   
                <CustomButton type='submit'>SIGN UP</CustomButton>
                
             </form>
            </div>
        )
    }
}
export default SignUp