import React from "react"
import { connect } from "react-redux"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import {toggleCartDropdown } from "../redux/cart/cart.action"
import "./cart-icon.styles.scss"
import { selectCartItemCount } from "../redux/cart/cart.selector"
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleCartDropdown,itemCount }) => (
    <div className = "cart-icon" onClick = { toggleCartDropdown }>
      <ShoppingIcon className = "shopping-icon"/>
      <span className="item-count" > {itemCount} </span>
    </div>
)
const mapDispatchToProps = dispatch => (
    {
        toggleCartDropdown : () => dispatch(toggleCartDropdown())
    }
)
const mapStateToProps = createStructuredSelector(
    {
        itemCount : selectCartItemCount
    }
)

export default connect( mapStateToProps, mapDispatchToProps)( CartIcon );