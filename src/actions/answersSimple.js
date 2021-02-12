import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import * as moment from 'moment';
import Swal from "sweetalert2";


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

        try {

            answers.map( async ( e ) => {

                if ( e.answers.toString() === 'yes' ) {

                        const resp = await fetchConToken( 'respuesta-simple/new',{ 
                            id_pregunta:e.id, 
                            persona_id: uid,  
                            fecha_hora: now,
                            si:1,
                            nose:0,
                            no:0
                        }, 'POST');    
                        
                        const body = await resp.json();
        
                        if ( body.ok ) {
                            
                            return Swal.fire(':)','Respuestas Registradas', 'success');            
                        }
                        else{
                            return Swal.fire(':(','Las respuestas ya fueron registradas', 'error');            
                        }
                    
                }
                if ( e.answers.toString() === 'no-know' ) {

                        const resp = await fetchConToken( 'respuesta-simple/new',{ 
                            id_pregunta:e.id, 
                            persona_id: uid,  
                            fecha_hora: now,
                            si:0,
                            nose:1,
                            no:0
                        }, 'POST');    
                        
                        const body = await resp.json();
        
                        if ( body.ok ) {
                            
                            return Swal.fire(':)','Respuestas Registradas', 'success');            
                        }
                    
                    
                }
                if ( e.answers.toString() === 'no' ) {
                    

                        const resp = await fetchConToken( 'respuesta-simple/new',{ 
                            id_pregunta:e.id, 
                            persona_id: uid,  
                            fecha_hora: now,
                            si:0,
                            nose:0,
                            no:1
                        }, 'POST');    
                        
                        const body = await resp.json();
        
                        if ( body.ok ) {
                            
                            return Swal.fire(':)','Respuestas Registradas', 'success');            
                        }
                    
                }
    
               
            });

        } catch (err) {
          return Swal.fire('Error', "Hable con el administrador", 'error')           
        }
    }

};