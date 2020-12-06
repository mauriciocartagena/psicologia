import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startLogin } from '../../actions/auth';
import { uiFalseDisabledButton, uiTrueDisabledButton } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

    const { uiLoadingButton, uiDisabled } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lUsername:'ad2min',
        lPassword:'administrador'
    });
    
    const { lUsername, lPassword } = formLoginValues;
    
    const handleLogin = ( e ) => {
        e.preventDefault(); 

        if ( lUsername.trim() === '' || lPassword.trim() === '') {
            return Swal.fire(':(', 'Username o contraseña esta vacia'  , 'error');
        }
        else if( lPassword.trim().length <= 5 ) {
           return Swal.fire(':(', `La contraseña debe tener 6 a mas digitos y tiene ${ lPassword.trim().length }`  , 'error');
        }
        
        dispatch( startLogin( lUsername, lPassword ) );  
        
    }
    useEffect(() => {

      if ( lUsername.trim() === '' ||  lPassword.trim() === '' ) {
       return dispatch( uiTrueDisabledButton() );
      }
      dispatch( uiFalseDisabledButton() );

    }, [ lUsername, lPassword ]);


    return (
        <div className="container">
            <form className="form-signin" onSubmit={ handleLogin } >
                <h2 className="form-signin-heading">Sistema de Psicologia</h2>
                <div className="login-wrap">
                    <div className="user-login-info">
                        <input 
                            type="text" 
                            name="lUsername"
                            className="form-control"  
                            placeholder="Username" 
                            autoFocus
                            value={ lUsername }
                            onChange={ handleLoginInputChange }
                            />
                        <input 
                            type="password"
                            name="lPassword" 
                            className="form-control" 
                            placeholder="Password" 
                            value={ lPassword }
                            onChange={ handleLoginInputChange }
                            />
                    </div>
                    <label className="checkbox">
                        <span className="pull-right">
                            <a data-toggle="modal" href="#myModal"> ¿Olvidadeste tu Contraseña?</a>
                        </span>
                        <br/>
                    </label>
                    <button className='btn btn-lg btn-login btn-block'  disabled={ uiDisabled } type="submit">
                        <i _ngcontent-kod-c28="" className={ uiLoadingButton }></i> Iniciar Sesión
                    </button>

                    <div className="registration">
                    ¿No tienes una cuenta?                   
                        <Link 
                            to="/auth/register"
                        > Crear cuenta 
                        </Link>
                    </div>
                </div>
                {/* Modal */}
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" className="modal fade in" style={{ display:"none" }} >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title">¿Olvidaste tu Contraseña?</h4>
                            </div>
                            <div className="modal-body">
                                <p>Ingrese tu email para restablecer tu contraseña</p>
                                <input type="text" name="email" placeholder="Email" autocomplete="off" className="form-control placeholder-no-fix" />

                            </div>
                            <div className="modal-footer">
                                <button data-dismiss="modal" className="btn btn-default" type="button">Cancel</button>
                                <button className="btn btn-success" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Modal */}
            </form>
        </div>
    );
}
