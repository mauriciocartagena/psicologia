import { types } from "../types/types";


const initState = {
    category:[],
    categoryActive: null
}

export const testSimpleCategoryReducer = ( state = initState, action ) => {

    switch ( action.type ) {
        case types.testSimpleCategoryActive:
            return { 
                ...state,
                categoryActive: state.category.find(  e => e.id_categoria.toString() === action.payload.id )
            }
        case types.testSimpleCategoryClear:
            return {
                ...state,
                categoryActive: null
            }
        case types.testSimpleCategoryLoaded:
            return {
                ...state,
                category:[ ...action.payload ]
            }
    
        default:
            return state;
    }

}