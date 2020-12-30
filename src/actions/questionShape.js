import { types } from "../types/types";
import Swal from 'sweetalert2';
import { uiCloseLoadingSaveButton, uiFalseDisabledButton, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";
import { fetchConToken } from "../helpers/fetch";

export const shapeRegister = ( pregunta, op1, op2, op3, op4, op5, op6, respuesta_correcta, name, testShape ) => {

    return async ( dispatch ) => {

        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        try {

            const resp = await fetchConToken('pregunta-formas/new', {
                nombre:name,
                pregunta:pregunta,
                op1:op1,
                op2:op2,
                op3:op3,
                op4:op4,
                op5:op5,
                op6:op6,
                respuesta_correcta:respuesta_correcta,
                id_test:testShape
            },'POST');

            const body = await resp.json();

            if ( body.ok ) {
                Swal.fire(':)','Pregunta registrada', 'success');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton () );
            }else {  

                Swal.fire(':(', body.msg, 'error');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton () );
            }
            
        } catch (error) {
            console.log( error);
            dispatch( uiOpenLoadingSaveButton() );
            dispatch( uiFalseDisabledButton () );
        }

    }

}

export const questionSetShape = ( question, nombre, id_test, id_resp ) => ( questionShape( { question, nombre, id_test, id_resp }  ) )

const questionShape = ( questionActive ) => ({ 
    type: types.questionSetActive,
    payload: questionActive
});

export const questionClearShape = ()  =>({ type: types.questionClearActive });