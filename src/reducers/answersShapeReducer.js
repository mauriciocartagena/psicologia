import { types } from "../types/types";


const initState = {
    answersShape: [],
}

export const answersShapeReducer = ( state = initState, action ) => {

    switch ( action.type ) {

        case types.answersShapeActive:
            return{
                ...state,
                answersShape: action.payload
            }
        case types.answersSimpleClear:
            return{
                ...state,
                answersShape: []
            }
        // case types.answersfilter:
        //         return{
        //             ...state,
        //             answers: action.payload
        //         }
        // case types.answersfilterActive:
        //     let array = state.answers;
        //     array[ action.payload.position ] = action.payload.answersActive 
        //     return{
        //         ...state,
        //         answers: array
        //     }      
        default:
            return  state;
    }
}