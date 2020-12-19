import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';

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
export const shapeRegister = ( pregunta, op1, op2, op3, op4, op5, op6, respuesta_correcta, name, testShape ) => {

    return async () => {
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

            console.log( body );
            
        } catch (error) {
            console.log( error)
        }

    }

}


export const shapeLoaded = ( shape ) => ({
    type: types.shapeLoaded,
    payload: shape 
});