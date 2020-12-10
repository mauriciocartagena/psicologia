import { fetchConToken } from "../helpers/fetch"

export const startRegisterInstitution = ( name, address, phone, emei, nit, contact_name, mobile ) => {
    return async( dispatch ) => {
        console.log( mobile );

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
        console.log( body );


    }
}
