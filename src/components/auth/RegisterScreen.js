import React, { useEffect } from 'react';
import cryptoRandomString from 'crypto-random-string';


import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../../actions/auth';
import { uiFalseDisabledButton, uiTrueDisabledButton } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { uiLoadingButton, uiDisabled } = useSelector(state => state.ui);

    const [formRegisterValues, handleRegisterInputChange] = useForm({

        nombre: "tu nombre",
        primer_apellido: "tu primer apellido",
        segundo_apellido: "tu segundo apellido",
        celular: `${ cryptoRandomString({ length:8, type:'numeric' }) }`,
        imei: `${ cryptoRandomString({ length:12, type:'numeric' }) }`,
        genero: "Masculino",
        edad: "15",
        direccion: "Cochabamba",
        padres_responsables: "padres",
        dni: `${ cryptoRandomString({ length: 8, type: 'url-safe' })}`,
        email: `${ cryptoRandomString({ length:8, type:'distinguishable' }) }@gmail.com`,
        username: "",
        password: "",
        password2:"",
        id_institucion: "1"

    });

    const { nombre, primer_apellido, segundo_apellido, celular, imei, genero, edad, direccion, padres_responsables, dni, email, username, password, id_institucion, password2 } = formRegisterValues;

    const handleRegisterUser = ( e ) => {
        e.preventDefault();

        dispatch( startRegister( nombre, primer_apellido, segundo_apellido, celular, imei, genero, edad, direccion, padres_responsables, dni, email, username, password, password2, id_institucion ) );
    }

    useEffect(() => {

        if ( password.trim() === '' ||  password2.trim() === ''|| username.trim() === '' ) {
          return dispatch( uiTrueDisabledButton() );
        }
        else if( password.trim().length <= 5 || password2.trim().length <= 5 ) {
            return dispatch( uiTrueDisabledButton() );
        }
        dispatch( uiFalseDisabledButton() );
  
      }, [ password, password2, username  ]);
  


    return (
        <div className="container">
            <form className="form-signin" onSubmit={ handleRegisterUser }>
                <h2 className="form-signin-heading">Crear Cuenta</h2>

                <div className="login-wrap">

                    <input 
                        type="text"     
                        name="username" 
                        className="form-control"
                        placeholder="User Name" 
                        value={ username }
                        onChange={ handleRegisterInputChange }
                         
                    />
                    <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="Contraseña" 
                        value={ password }
                        onChange={ handleRegisterInputChange }
                    />
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder="Confirmar Contraseña"
                        name="password2"
                        value={ password2 }
                        onChange={ handleRegisterInputChange }
                    />

                    <button className="btn btn-lg btn-login btn-block" type="submit" disabled={ uiDisabled } >
                        <i _ngcontent-kod-c28="" className={ uiLoadingButton }></i> Crear Cuenta
                    </button>

                    <div className="registration">
                        ¿Ya tienes una cuenta?
                        <Link to="/auth/login" >  Login
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
