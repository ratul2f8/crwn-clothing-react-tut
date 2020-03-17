import React from 'react';
import Homepage from "./components/pages/homepage/homepage.component";
import './App.css'
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from "./components/pages/shop/shop.component"
import Header from "./components/headers/header.component"
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import  { auth,userAuthDocument } from "./components/firebase/firebase.utils"
import { connect } from 'react-redux'
import { setCurrentUser } from './components/redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import  { selectCurrentUser } from "./components/redux/user/user.selector"
import CheckoutPage from "./components/pages/checkout/checkout.components"

class App extends React.Component{

 unSubscribeFromAuth = null
 componentDidMount(){
   const { setCurrentUser} = this.props

   this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await userAuthDocument(userAuth)
      userRef.onSnapshot( snapshot => {
        setCurrentUser(
          {
            id: snapshot.id,
            ...snapshot.data()
          }
        )        
      })
    }
    else{
      setCurrentUser( userAuth )
    }
   }) 
 }

 componentWillUnmount(){
   this.unSubscribeFromAuth()
 }

 render(){
  return (
    <div>
      <Header ></Header>
     <Switch>
     <Route exact path ="/" component={Homepage}></Route>
     <Route  path="/shop" component = {ShopPage}></Route>
     <Route exact path="/checkout" component={CheckoutPage}></Route>
     <Route exact path="/signin" 
     render={() => this.props.currentUser ? ( <Redirect to="/"/>)
     : (<SignInAndSignUpPage/>)}/>
     </Switch>
    </div>
   )
 }
}
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

const mapStateToProps = createStructuredSelector(
  { 
    currentUser : selectCurrentUser
  }
)
export default connect( mapStateToProps, mapDispatchToProps)(App);
