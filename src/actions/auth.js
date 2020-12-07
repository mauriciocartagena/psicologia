import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import { uiCloseLoadingButton, uiCloseLoadingSaveButton, uieventLogout, uiFalseDisabledButton, uiOpenLoadingButton, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";
// import { eventLogout } from "./events";

export const startLogin = ( username, password ) => { 
    return async ( dispatch ) => {

        dispatch( uiCloseLoadingButton() );
        dispatch( uiTrueDisabledButton() );

       const resp = await fetchSinToken( 'auth',{ username, password }, 'POST' );
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
            dispatch( uiOpenLoadingButton() );
            dispatch( uiFalseDisabledButton() );
       }else{

           Swal.fire('Error', body.msg  , 'error');
           dispatch( uiOpenLoadingButton() );
           dispatch( uiFalseDisabledButton() );

       }

    }
}
export const startLoginAddAccount = ( username, password ) => { 
    return async ( dispatch ) => {

       const resp = await fetchSinToken( 'auth',{ username, password }, 'POST' );
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
            dispatch( uiOpenLoadingButton() );
            dispatch( uiFalseDisabledButton() );
       }else{

           Swal.fire('Error', body.msg  , 'error');
           dispatch( uiOpenLoadingButton() );
           dispatch( uiFalseDisabledButton() );

       }

    }
}

export const startRegister = ( nombre, primer_apellido, segundo_apellido, celular, imei, genero, edad, direccion, padres_responsables, dni, email, username, password, password2, id_institucion ) => {
    return async ( dispatch ) => {

        dispatch( uiCloseLoadingButton() );
        dispatch( uiTrueDisabledButton() );

        if( password !== password2 ) {
            return (
                Swal.fire( ':(','Las contraseñas no coinciden', 'error' ),
                dispatch( uiOpenLoadingButton() ),
                dispatch( uiFalseDisabledButton() )
            );

        }
        else if( password.trim().length <= 5 || '' || password2.trim().length <= 5 || '' || username === '' ){
            return (
                Swal.fire( ':(','El username o password no son validos', 'error' ),
                dispatch( uiOpenLoadingButton() ),
                dispatch( uiFalseDisabledButton() )
            );
        }

        const resp = await fetchSinToken( 'auth/new',{ nombre, primer_apellido, segundo_apellido, celular, imei, genero, edad, direccion, padres_responsables, dni, email, username, password, id_institucion }, 'POST' );
        const body = await resp.json();
 
        if ( body.ok ) {
            dispatch( startLoginAddAccount( username, password ));
        }else{
            Swal.fire('Error', body.msg, 'error');
            dispatch( uiOpenLoadingButton() );
            dispatch( uiFalseDisabledButton() );
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

        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        try {

            const resp = await fetchConToken( 'users/update', { persona_id ,nombre, primer_apellido, segundo_apellido, celular, imei, edad, dni, direccion, email }, 'PUT' );
            const body = await resp.json();
     
            const respPersona = await fetchConToken( 'users/usuario',{ persona_id } , 'POST' , body.token );
            
            const { persona } = await respPersona.json();

            if ( body.ok ) {
                dispatch( accountUpdated( persona ) );
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
    
            }else{
                Swal.fire('Error', body.msg, 'error');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
            }

            
        } catch (error) {
            console.log( error );
            dispatch( uiOpenLoadingSaveButton() );
            dispatch( uiFalseDisabledButton() );
        }

    }
}
export const startUpdateUser = ( persona_id ,username ) => {

    return async ( dispatch ) => {

        dispatch( uiCloseLoadingSaveButton() );
        dispatch( uiTrueDisabledButton() );

        try {

            const resp = await fetchConToken( 'users/update-user', { persona_id, username }, 'PUT' );
            const body = await resp.json();
     
            console.log( body );
            const respPersona = await fetchConToken( 'users/usuario',{ persona_id } , 'POST' , body.token );
            
            const { persona } = await respPersona.json();

            if ( body.ok ) {
                dispatch( accountUpdated( persona ) );
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
    
            }else{
                Swal.fire('Error', body.msg, 'error');
                dispatch( uiOpenLoadingSaveButton() );
                dispatch( uiFalseDisabledButton() );
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