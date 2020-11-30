import { types } from "../types/types";

const initialState = {
    uiDrowp:'dropdown',
    uiSidebar:'nav-collapse',
    uiSection:''
}

export const uiReducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case types.uiOpenSidebar:
            return {
                ...state,
                uiSidebar:'nav-collapse'
            }
        case types.uiCloseSidebar:
            return {
                ...state,
                uiSidebar:'nav-collapse hide-left-bar'
            }
        case types.uiOpenSection:
            return {
                ...state,
                uiSection:''
            }
        case types.uiCloseSection:
            return {
                ...state,
                uiSection:'merge-left'
            }
        case types.uiOpenDrowp:
            return {
                ...state,
                uiDrowp:'dropdown open'
            }
        case types.uiCloseDrowp:
            return {
                ...state,
                uiDrowp:'dropdown'
            }
    
        default:
            return state;
    }
}