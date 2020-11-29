import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lUsername:'ad2min',
        lPassword:'administrador'
    });

    const { lUsername, lPassword } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( lUsername, lPassword ) );

    }


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
                        <input type="checkbox" value="remember-me" /> Recordar
                        <span className="pull-right">
                            <a data-toggle="modal" href="#myModal"> ¿Olvidadeste tu Contraseña?</a>

                        </span>
                    </label>
                    <button className="btn btn-lg btn-login btn-block" type="submit"><i _ngcontent-kod-c28="" className="fa fa-lock"></i> Iniciar Sesión</button>

                    <div className="registration">
                    ¿No tienes una cuenta?                   
                        <a className="" href="registration.html"> Crear cuenta </a>
                    </div>

                </div>

                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title">Forgot Password ?</h4>
                            </div>
                            <div className="modal-body">
                                <p>Enter your e-mail address below to reset your password.</p>
                                <input type="text" name="email" placeholder="Email" autoComplete="off" className="form-control placeholder-no-fix" />

                            </div>
                            <div className="modal-footer">
                                <button data-dismiss="modal" className="btn btn-default" type="button">Cancel</button>
                                <button className="btn btn-success" type="button">Iniciar Sesión</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}
