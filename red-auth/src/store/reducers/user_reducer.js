import * as ACTION_TYPES from '../actions/action_type'

const initialState={
    user_text:''
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        
        case ACTION_TYPES.USER_INPUT:
            return{
                ...state,
                user_text:action.payload
            }
        default:
            return state
    }
}

export default userReducer;