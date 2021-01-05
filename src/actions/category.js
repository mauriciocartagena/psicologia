import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import { uiCloseLoadingSaveButton, uiFalseDisabledButton, uiModalFalse, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";


export const startRegisterCategory = ( name ) => {
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
        const resp = await fetchConToken( 'categoria/new',{ 
                nombre_categoria:name, 
        } , 'POST');
        const body = await resp.json();


        if ( body.ok ) {
            Swal.fire(':)','Categoria registrada', 'success');
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

export const testSimpleCategoryActive = ( testSimpleCategory, id ) => ({ 
    type:types.testSimpleCategoryActive,
    payload: { testSimpleCategory, id }
});

export const updatedTestSimpleCategory = ( name, id  ) => {
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
            const resp = await fetchConToken( 'categoria/update', { 
                nombre_categoria: name,
                id_categoria: id
            }, 'PUT');

            const body = await resp.json();
    
            if ( body.ok ) {
                Swal.fire(':)','Categoria actualizada', 'success');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
                dispatch( TestSimpleCategorySetActiveClear() );
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

export const TestSimpleCategorySetActiveClear = () => ({
    type:types.testSimpleCategoryClear
});


export const testSimpleCategoryLoaded = ( testSimpleCategory ) => ({
    type: types.testSimpleCategoryLoaded,
    payload: testSimpleCategory 
});
