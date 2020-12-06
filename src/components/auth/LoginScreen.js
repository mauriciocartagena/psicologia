import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startLogin } from '../../actions/auth';
import { uiCloseLoadingButton, uiOpenLoadingButton } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

    const { uiLoadingButton } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const [ buttonLogin, setButtonLogin ] = useState( false );

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lUsername:'ad2min',
        lPassword:'administrador'
    });
    
    const { lUsername, lPassword } = formLoginValues;
    
    const handleLogin = ( e ) => {
        e.preventDefault();

        setButtonLogin( true );
        dispatch( uiCloseLoadingButton() );

        if ( lUsername.trim() === '' || lPassword.trim() === '') {
            return (
                Swal.fire(':(', 'Username o contraseña incorrectos'  , 'error'),
                dispatch( uiOpenLoadingButton() ),
                setButtonLogin( false )
            );
        }
        dispatch( uiOpenLoadingButton() );
        setButtonLogin( false );
        dispatch( startLogin( lUsername, lPassword ) );   
        
    }
    useEffect(() => {

      if ( lUsername.trim() === '' ||  lPassword.trim() === '' ) {
        return setButtonLogin( true );
      }
      setButtonLogin( false );

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
                    <button className='btn btn-lg btn-login btn-block'  disabled={ buttonLogin } type="submit">
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
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade in" style={{ display:"none" }} >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title">¿Olvidaste tu Contraseña?</h4>
                            </div>
                            <div class="modal-body">
                                <p>Ingrese tu email para restablecer tu contraseña</p>
                                <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix" />

                            </div>
                            <div class="modal-footer">
                                <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                                <button class="btn btn-success" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Modal */}
            </form>
        </div>
    );
}
