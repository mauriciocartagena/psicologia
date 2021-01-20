import { types } from "../types/types";


export const answersSimpleActive = ( answerSimple ) => ({ 
    type:types.answersSimpleActive,
    payload: answerSimple
});

export const answersSimpleClear = () => ({ 
    type:types.answersSimpleClear
});
