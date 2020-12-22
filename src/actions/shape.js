import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';
import Swal from 'sweetalert2';
import { uiCloseLoadingSaveButton, uiFalseDisabledButton, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";


export const shapeStartLoading = () => {
    return async ( dispatch ) => { 
       try {
           
           const resp = await fetchConToken('test-formas/tformas');
           const body = await resp.json();

           const { testFormas } =  body;

           dispatch( shapeLoaded( testFormas ) );

       } catch (error) {
           console.log(error);
       }
    }
}
export const testShapeLoading = () => {

    return async( dispatch ) => {

        const resp = await fetchConToken('pregunta-formas/pformas');
        const body = await resp.json();

        try {

            if ( body.ok ) {
                
                const  { preguntaFormas } = body;
                dispatch( testShapeLoaded( preguntaFormas ))
            }
            else{

                Swal.fire(':(', body.msg, 'error');

            }
            
        } catch ( error ) {
            console.log(error);
        }
    }

}
export const shapeRegister = ( pregunta, op1, op2, op3, op4, op5, op6, respuesta_correcta, name, testShape ) => {

    return async ( dispatch ) => {

        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        try {

            const resp = await fetchConToken('pregunta-formas/new',{
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

export const testShapeLoaded = ( testShape ) => ({
    type: types.testShapeLoaded,
    payload: testShape
})

export const shapeLoaded = ( shape ) => ({
    type: types.shapeLoaded,
    payload: shape 
});