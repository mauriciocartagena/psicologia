import { types } from "../types/types";

const initState = { 
    questionActive: [],
}

export const questionSimpleReducer = ( state = initState, action ) => {

    switch ( action.type ) {
        
        case types.questionSimpleSetActive:
            return {
                ...state,
                questionActive:  action.payload 
            }
        case types.questionSimpleClearActive:
            return { 
                ...state,
                questionActive: [],
            }
    
        default:
            return state;
    }

}