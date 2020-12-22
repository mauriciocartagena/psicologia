import { types } from "../types/types";

const initialState = {
    shape:[],
    testShape:[]
}

export const shapeReducer = ( state = initialState, action ) => {

    switch ( action.type ) {


        case types.shapeLoaded:
            return {
                ...state,
                shape:[ ...action.payload ]
            }
        case types.testShapeLoaded:
            return{ 
                ...state,
                testShape:[ ...action.payload ]
            }
        default:
            return state
    }
    
}
