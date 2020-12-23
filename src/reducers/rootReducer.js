import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { institutionReducer } from "./institutionReducer";
import { questionShape } from "./questionShape";
import { shapeReducer } from "./shapeReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
       ui:uiReducer,
       auth: authReducer,
       institution:institutionReducer,
       shape:shapeReducer,
       questionShape:questionShape
});