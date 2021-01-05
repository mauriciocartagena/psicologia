import Swal from 'sweetalert2';
import { uiCloseLoadingSaveButton, uiFalseDisabledButton, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";
import { fetchConToken } from "../helpers/fetch";

export const simpleRegister = ( pregunta, id_category, id_test ) => {

    return async ( dispatch ) => {

        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        try {

            const resp = await fetchConToken('pregunta-simple/new', {
                pregunta: pregunta,
                id_categoria: id_category,
                id_test: id_test
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
