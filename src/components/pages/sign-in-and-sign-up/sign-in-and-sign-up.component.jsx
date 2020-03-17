import React from "react"
import "./sign-in-and-sign-up.component.styles.scss"
import SignIn from "../../sign-in/sign-in.component"
import SignUp from "../../sign-up/sign-up.component"

const SignInAndSignUpPage = () => (
    <div className='sign-in-up'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
)

export default SignInAndSignUpPage