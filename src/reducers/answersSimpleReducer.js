import { types } from "../types/types";


const initState = {
    answersSimpleActive: null,
    answers: null
}

export const answersSimpleReducer = ( state = initState, action ) => {

    switch ( action.type ) {

        case types.answersSimpleActive:
            return{
                ...state,
                answersSimpleActive: action.payload
            }
        case types.answersSimpleClear:
            return{
                ...state,
                answersSimpleActive: null
            }
        case types.answersfilter:
                return{
                    ...state,
                    answers: action.payload
                }
        case types.answersfilterActive:
            let array = state.answers;
            array[ action.payload.position ] = action.payload.answersActive 
            return{
                ...state,
                answers: array
            }      
        default:
            return  state;
    }
}