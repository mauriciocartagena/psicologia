import { types } from "../types/types";

const initState = {
    testSimple: [],
    testActiveSimple: null
}

export const testSimpleReducer = ( state = initState, action ) => {

    switch ( action.type ) {
        case types.testSimpleActive:
            return {
                ...state,
                testActiveSimple: state.testSimple.find(  e => e.id_test.toString() === action.payload.id )
            }
        case types.testSimpleClear:
            return {
                ...state,
                testActiveSimple: null
            }
        case types.testSimpleLoaded:
            return { 
                ...state,
                testSimple: [ ...action.payload ]
            }
    
        default:
            return state;
    }

}