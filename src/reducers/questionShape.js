import { types } from '../types/types';

const initialState = {
    questionActive: {
        question: null,
        name: '',
        id_test: null,
        id_resp: null
    }
}

export const questionShape = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.questionSetActive:
            return {
                ...state,
                questionActive: action.payload
            }
        case types.questionClearActive:
            return { 
                ...state,
                questionActive: null
            }
    
        default:
            return state;
    }
}
