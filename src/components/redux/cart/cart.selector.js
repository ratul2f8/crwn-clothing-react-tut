import { createSelector } from "reselect"
const userSelector = state => state.cart

export const selectCartItems = createSelector(
    [ userSelector ],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [userSelector],
    ( cart ) => cart.hidden
)

export const selectCartItemCount = createSelector(
    [ selectCartItems],
    cartItems => 
    cartItems.reduce(
        ( accumulator, cartItem) => accumulator+cartItem.quantity,
        0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulator,cartItem) => accumulator + cartItem.quantity*cartItem.price
        ,
        0
    )
)