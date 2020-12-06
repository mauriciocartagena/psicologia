import { types } from "../types/types";

const initialState = {
    uiDrowp:'dropdown',
    uiSidebar:'nav-collapse',
    uiSection:'',
    uiLoadingButton:'fa fa-lock',
    uiLoadingSaveButton:'fa fa-save',
    uiDisabled:false
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
        case types.uiTrueDisabledButton:
            return {
                ...state,
                uiDisabled:true
            }
        case types.uiFalseDisabledButton:
            return {
                ...state,
                uiDisabled:false
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

        case types.uiOpenLoadingButton:
            return {
                ...state,
                uiLoadingButton:'fa fa-lock'
            }
        case types.uiCloseLoadingButton:
            return {
                ...state,
                uiLoadingButton:'fa fa-spin fa-refresh'
            }
            
        case types.uiOpenLoadingSaveButton:
            return{
                ...state,
                uiLoadingSaveButton:'fa fa-save'
            }
        case types.uiCloseLoadingSaveButton:
            return{
                ...state,
                uiLoadingSaveButton:'fa fa-spin fa-refresh'
            }
        
        case types.uieventLogout:
            return {
                ...initialState
            }
    
        default:
            return state;
    }
}