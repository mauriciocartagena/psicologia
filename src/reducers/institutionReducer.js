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
        case types.institutionUpdate:
            return {
                ...state,
                institutions: state.institutions.map(
                    e =>( e.id_institucion === action.payload.id_institucion ) ? action.payload : e
                )
            }
        default:
            return state
    }
    
}
