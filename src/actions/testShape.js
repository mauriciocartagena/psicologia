import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import { uiCloseLoadingSaveButton, uiFalseDisabledButton, uiModalFalse, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";


export const startRegisterTestShape = ( name ) => {
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
        const resp = await fetchConToken( 'test-formas/new',{ 
                nombre:name, 
        } , 'POST');
        const body = await resp.json();


        if ( body.ok ) {
            Swal.fire(':)','Prueba forma registrada', 'success');
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

export const testShapeSetActive = ( testShape, id ) => ({ 
    type:types.testShapeActive,
    payload: { testShape, id }
});

export const updatedTestShape = ( name, id_test  ) => {
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
            const resp = await fetchConToken( 'test-formas/update', { 
                nombre:name,
                id_test:id_test
            }, 'PUT');

            const body = await resp.json();
    
            if ( body.ok ) {
                Swal.fire(':)','Prueba forma actualizada', 'success');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
                dispatch( TestShapeSetActiveClear() );
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

export const TestShapeSetActiveClear = () => ({
    type:types.testShapeClear
});


export const testShapeLoaded = ( testShape ) => ({
    type: types.testShapeLoaded,
    payload: testShape 
});
