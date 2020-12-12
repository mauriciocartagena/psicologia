import { types } from "../types/types";

const initialState = {
    institutions:[]
}

export const institutionReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.institutionRegister:
            return {
                ...state,
                ...action.payload,

            }
        case types.institutionLoaded:
            return {
                ...state,
                institutions: [ ...action.payload]

            }
        default:
            return state
    }
    
}
