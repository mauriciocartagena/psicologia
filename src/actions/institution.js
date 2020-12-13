import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import { uiCloseLoadingSaveButton, uiFalseDisabledButton, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";

export const startRegisterInstitution = ( name, address, phone, emei, nit, contact_name, mobile ) => {
    return async( dispatch ) => {

        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        if ( name.trim() === '' || address.trim() === '' || phone.trim() === '' || emei.trim() === '' || nit.trim() === '' || contact_name.trim() === '' || mobile.trim() === '' ) {
            
            return (
                Swal.fire(':(', 'Todos los campos son requeridos', 'error'),
                dispatch( uiOpenLoadingSaveButton() ),
                dispatch( uiFalseDisabledButton() )
            );

        }
        const resp = await fetchConToken( 'institutos/new',{ 
                nombre:name, 
                direccion:address, 
                celular:mobile, 
                telefono:phone, 
                imei:emei, 
                nit:nit, 
                nombre_contacto:contact_name 
        } , 'POST');
        const body = await resp.json();


        if ( body.ok ) {
            Swal.fire(':)','Institución registrada', 'success');
            dispatch( uiOpenLoadingSaveButton() );
            dispatch( uiFalseDisabledButton() );
        }else{
            Swal.fire('Error', body.msg, 'error');
            dispatch( uiOpenLoadingSaveButton() );
            dispatch( uiFalseDisabledButton() );
        }


    }
}

export const fetchInstitutions = () => {
    return  async ( dispatch ) => {
        
        try {
            
            const resp = await fetchConToken( 'institutos/inst', 'GET');
    
            const body = await resp.json();
            const { instituciones } = body;
            
            if ( body.ok ) {
                
                dispatch( institutionLoaded( instituciones ) );
            
            }else{
                console.log("error" + body.msg )
            }

        } catch (error) {
            console.log("erro", error);
        }
    }
}

const institutionLoaded = ( institutions ) => ({
    type: types.institutionLoaded,
    payload: institutions 
});
