import { types } from "../types/types";


export const answersSimpleActive = ( answerSimple ) => ({ 
    type:types.answersSimpleActive,
    payload: answerSimple
});

export const answersSimpleClear = () => ({ 
    type:types.answersSimpleClear
});

export const answersfilter = ( answer ) =>({
    type:types.answersfilter,
    payload: answer
});
export const answersfilterActive = ( answersActive, position ) =>({
    type:types.answersfilterActive,
    payload: { answersActive, position }
});