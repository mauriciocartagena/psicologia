import { types } from "../types/types";

export const answersShapeActive = ( answerShape ) => ({ 
    type:types.shapeAnswersActive,
    payload: answerShape
});

// AnwersShape Response


export const answersShapeFindAll = ( answerShape ) => ({ 
    type:types.answersShapeActive,
    payload: answerShape
});
