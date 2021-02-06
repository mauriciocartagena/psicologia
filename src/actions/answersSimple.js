import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import * as moment from 'moment';


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

export const answersRegister = ( uid, answers ) => {
    
    return async () => {
        
        const now = moment().format();

        const resp = await fetchConToken( 'respuesta-simple/new',{ 
            id_pregunta:'6', 
            persona_id: uid,  
            fecha_hora: now,
            si:0,
            nose:0,
            no:1
        }, 'POST'); 

        const body = await resp.json();

        console.log( body )

    }

};