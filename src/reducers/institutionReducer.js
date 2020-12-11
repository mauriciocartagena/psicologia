import { types } from "../types/types";

const initialState = {
    checking:true
}

export const institutionReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.institutionRegister:
            return{
                ...state,
                ...action.payload,
                checking:false
            }
        default:
            return state
    }
    
}
