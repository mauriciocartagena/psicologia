import { types } from "../types/types";


const initialState = {
    testShape: [],
    testShapeActive: null
}

export const testShapeReducer = ( state = initialState, action  ) => {

    switch ( action.type ) {

        case types.testShapeActive:
            return {
                ...state,
                testShapeActive: state.testShape.find(  e => e.id_test.toString() === action.payload.id )
            }
        case types.testShapeClear:
            return {
                ...state,
                testShapeActive: null
            }
        case types.testShapeLoaded:
            return {
                ...state,
                testShape: [ ...action.payload ]
            }
    
        default:
            return state;
    }

}