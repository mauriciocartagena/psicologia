import { types } from "../types/types";


const initalState = {
    checking:true,
    // uid:null,
    // name:null
}

export const authReducer = ( state = initalState, action ) => {

    switch( action.type ){

        case types.authLogin:
                return{
                    ...state,
                    ...action.payload,
                    checking: false
                }
        case types.authUserUpdate:
            return {
                ...state,
                persona: action.payload
            }
        case types.authUserUpdatePassword:
            return {
                ...state,
                persona: action.payload
            }
        case types.authCheckingFinish:
            return{
                ...state,
                checking:false
            }
        case types.accountUpdate:
            return {
                ...state,
                persona: action.payload
            }
        case types.authLogout:
            return {
                checking: false
            }

        default: 
            return state;
    }

}