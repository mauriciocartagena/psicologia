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

export const updatedInstitution = ( name, address, phone, emei, newNit, contact_name, mobile, id ) => {
    return async ( dispatch ) => {
        
        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        try {
            
    
            if ( name.trim() === '' || address.trim() === '' || phone.trim() === '' || emei.trim() === '' || newNit.trim() === '' || contact_name.trim() === '' || mobile.trim() === '' ) {
                
                return (
                    Swal.fire(':(', 'Todos los campos son requeridos', 'error'),
                    dispatch( uiOpenLoadingSaveButton() ),
                    dispatch( uiFalseDisabledButton() ),
                    dispatch( fetchInstitutions() )
                );
    
            }
            const resp = await fetchConToken( 'institutos/update',{ 
                    nombre:name, 
                    direccion:address, 
                    celular:mobile, 
                    telefono:phone, 
                    imei:emei, 
                    nit:newNit, 
                    nombre_contacto:contact_name,
                    id_institucion:id
            } , 'PUT');
            const body = await resp.json();
    
    
            if ( body.ok ) {
                Swal.fire(':)','Institución actualizada', 'success');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
            }else{
                Swal.fire('Error', body.msg, 'error');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
            }
    

        } catch (error) {
            console.log(error);
            return Swal.fire('Error', "Hable con el administrador", 'error');
        }

    }
}

const institutionLoaded = ( institutions ) => ({
    type: types.institutionLoaded,
    payload: institutions 
});
