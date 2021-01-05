import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import { uiCloseLoadingSaveButton, uiFalseDisabledButton, uiModalFalse, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";


export const startRegisterTestSimple = ( name ) => {
    return async( dispatch ) => {

        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        if ( name.trim() === '' ) {
            
            return (
                Swal.fire(':(', 'Todos los campos son requeridos', 'error'),
                dispatch( uiOpenLoadingSaveButton() ),
                dispatch( uiFalseDisabledButton() )
            );

        }
        const resp = await fetchConToken( 'test-simple/new',{ 
                nombre_test:name, 
        } , 'POST');
        const body = await resp.json();


        if ( body.ok ) {
            Swal.fire(':)','Prueba simple registrada', 'success');
            dispatch( uiOpenLoadingSaveButton() );
            dispatch( uiFalseDisabledButton() );
            dispatch( uiModalFalse() );
        }else{
            Swal.fire('Error', body.msg, 'error');
            dispatch( uiOpenLoadingSaveButton() );
            dispatch( uiFalseDisabledButton() );
        }


    }
}

export const testSimpleActive = ( testSimple, id ) => ({ 
    type:types.testSimpleActive,
    payload: { testSimple, id }
});

export const updatedTestSimple = ( name, id_test  ) => {
    return async ( dispatch ) => {
        
        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        try {
    
            if ( name.trim() === '' ) {
                
                return (
                    Swal.fire(':(', 'Todos los campos son requeridos', 'error'),
                    dispatch( uiOpenLoadingSaveButton() ),
                    dispatch( uiFalseDisabledButton() )
                );
    
            }
            const resp = await fetchConToken( 'test-simple/update', { 
                nombre_test:name,
                id_test:id_test
            }, 'PUT');

            const body = await resp.json();
    
            if ( body.ok ) {
                Swal.fire(':)','Prueba simple actualizada', 'success');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
                dispatch( TestSimpleSetActiveClear() );
            }else{
                Swal.fire('Error', body.msg, 'error');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
            }
    

        } catch (error) {
            console.log(error);
            return (
                Swal.fire('Error', "Hable con el administrador", 'error'),
                dispatch( uiOpenLoadingSaveButton() ),
                dispatch( uiFalseDisabledButton() )
            );
        }

    }
}

export const TestSimpleSetActiveClear = () => ({
    type:types.testSimpleClear
});


export const testSimpleLoaded = ( testSimple ) => ({
    type: types.testSimpleLoaded,
    payload: testSimple 
});
