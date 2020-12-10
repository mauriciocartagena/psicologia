import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { institutionReducer } from "./institutionReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
       ui:uiReducer,
       auth: authReducer,
       institution:institutionReducer
    
});