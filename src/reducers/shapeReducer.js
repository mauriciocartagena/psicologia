import { types } from "../types/types";

const initialState = {
    shape:[]
}

export const shapeReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.shapeLoaded:
            return {
                ...state,
                shape:[ ...action.payload ]
            }
        default:
            return state
    }
    
}
