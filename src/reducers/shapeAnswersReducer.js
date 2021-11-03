import { types } from "../types/types";

const initialState = {
    shape: []
}

export const shapeAnswersReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.shapeAnswersActive:
            return {
                ...state,
                shape: action.payload
            }
        case types.shapeAnswersClear:
            return {
                ...state,
                shape: []
            }
        default:
            return state
    }

}
