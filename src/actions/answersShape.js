import { types } from "../types/types";

export const answersShapeActive = ( answerShape ) => ({ 
    type:types.shapeAnswersActive,
    payload: answerShape
});
