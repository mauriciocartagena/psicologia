import { types } from "../types/types";


const initState = {
    answersSimpleActive: null
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
        default:
            return  state;
    }
}