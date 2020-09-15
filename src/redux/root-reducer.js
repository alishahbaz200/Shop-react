import {combineReducers } from "redux";
import cartReducer from "./cart/card.reducer";
import userReducer from "./User/user-reducer"

const rootReducer =  combineReducers({
    user:userReducer,
    cart:cartReducer
})
export default rootReducer