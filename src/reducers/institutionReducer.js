import { types } from "../types/types";

const initialState = {
    institutions:[],
    activeInstitution:null
}

export const institutionReducer = ( state = initialState, action ) => {

    switch ( action.type ) {


        case types.institutionSetActive:
            return {
                ...state,
                activeInstitution: state.institutions.find(  institution => institution.id_institucion.toString() === action.payload.id )
            }
        case types.institutionLoaded:
            return {
                ...state,
                institutions: [ ...action.payload]

            }
        case types.institutionSetActiveClear:
            return { 
                ...state,
                activeInstitution:null
            }
        
        default:
            return state
    }
    
}
