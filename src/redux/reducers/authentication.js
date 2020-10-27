import { LOGIN_SUCCESS, LOGIN_FAILED } from '../types';

const initialState = {
    error: false,
    message:'',
    user:{},
    isAuthenticated:false
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS :
            return {
                ...state,
                user:action.payload,
                error:false,
                message:'Login success',
                isAuthenticated:true
            }
        case LOGIN_FAILED :
            return {
                ...state,
                error:true,
                message:action.payload
            }
        default :
        return {
            ...state
        }
    }
}