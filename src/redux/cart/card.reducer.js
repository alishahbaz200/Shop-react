import CardActionType from './cart.type'
const INITIAL_STATE = {
    hidden:true
} 

const cartReducer = (state = INITIAL_STATE , action)=>{
    switch (action.type) {
        case CardActionType.TOGGLE_CART_HIDDEN:return{
            ...state,
            hidden:!state.hidden
        }
        default: return state
    }
}
export default cartReducer

