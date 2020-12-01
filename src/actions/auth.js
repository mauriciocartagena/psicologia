import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import { uieventLogout } from "./ui";
// import { eventLogout } from "./events";



export const startLogin = ( username, password ) => { 
    return async ( dispatch ) => {

       const resp = await fetchSinToken( 'auth',{ username, password }, 'POST' );
       const body = await resp.json();

       const persona_id = body.uid;
       const respPersona = await fetchConToken( 'users/usuario',{ persona_id } , 'POST' , body.token );
       
       const { persona } = await respPersona.json();


       console.log( body );
       if ( body.ok ) {
           localStorage.setItem('token', body.token);
           localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                username: body.username,
                persona:persona
            }));
       }else{
           Swal.fire('Error', body.msg, 'error');
       }

    }
}

export const startRegister = ( email, password, name ) => {
    return async ( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new',{ email, password, name }, 'POST' );
        const body = await resp.json();
 
        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
             
             dispatch( login({
                 uid: body.uid,
                 name: body.name
             }));
        }else{
            Swal.fire('Error', body.msg, 'error');
        }

    }
} 

export const startChecking = () => {

    return async( dispatch ) => {

        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        const persona_id = body.uid;
        const respPersona = await fetchConToken( 'users/usuario',{ persona_id } , 'POST' , body.token );
        
        const { persona } = await respPersona.json();
        
 
        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
             
             dispatch( login({
                 uid: body.uid,
                 username: body.username,
                 persona:persona
             }));
        }else{
            dispatch( checkingFinish() );
        }

    }

}

export const startUpdateAccount = ( persona_id, nombre, primer_apellido, segundo_apellido, celular, imei, edad, dni, direccion, email ) => {

    return async ( dispatch ) => {

        try {

            const resp = await fetchConToken( 'users/update', { persona_id ,nombre, primer_apellido, segundo_apellido, celular, imei, edad, dni, direccion, email }, 'PUT' );
            const body = await resp.json();
     
            const respPersona = await fetchConToken( 'users/usuario',{ persona_id } , 'POST' , body.token );
            
            const { persona } = await respPersona.json();

            if ( body.ok ) {
                dispatch( accountUpdated( persona ) );
    
            }else{
                Swal.fire('Error', body.msg, 'error');
            }

            
        } catch (error) {
            console.log( error );
        }

    }
}

const accountUpdated = ( persona ) => ({

    type: types.accountUpdate,
    payload: persona

});


const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = ( user ) => ({ 
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( uieventLogout() );
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout });