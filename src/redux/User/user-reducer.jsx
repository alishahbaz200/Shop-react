import {SET_CURRENT_USER} from "./user.actions"

const initialValue = {
    currentUser : null
}

 const userReducer = (state= initialValue , action) =>{
    switch (action.type) {
        case SET_CURRENT_USER:return {
            ...this.state ,
            currentUser: action.payload
        }
        default: return state
    }
}

export default userReducer