import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startUpdateUserPassword } from '../../actions/auth';
import { uiFalseDisabledButton, uiTrueDisabledButton } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const ChangePasswordScreen = () => {

    const dispatch = useDispatch();

    const { uiLoadingSaveButton, uiDisabled } = useSelector(state => state.ui);
    const { persona_id } = useSelector(state => state.auth.persona);
    
    const [ formPasswordValues, handlePasswordInputChange ] = useForm({

        passwordCurrent:'',
        passwordNew:'',
        passwordAgain:''

    });
    const inputStylePassword = {
        color:'#1D253E'
    }
    
    const { passwordCurrent, passwordNew, passwordAgain } = formPasswordValues;

    useEffect(() => {
        if ( passwordNew.trim() === '' ||  passwordAgain.trim() === ''|| passwordCurrent.trim() === '' ) {
            return dispatch( uiTrueDisabledButton() );
        }
        else if( passwordCurrent.trim().length <= 5 || passwordNew.trim().length <= 5 || passwordAgain.trim().length <= 5 ) {
            return dispatch( uiTrueDisabledButton() );
        }
        
          dispatch( uiFalseDisabledButton() );

    }, [ passwordCurrent, passwordNew, passwordAgain, dispatch ])


    const handleChangePassword = ( e ) => {
        e.preventDefault();
        dispatch( startUpdateUserPassword( persona_id, passwordCurrent, passwordNew, passwordAgain ) );
    }
    

    return (
        <div className="col-md-12">
            <section className="panel">
                <div className="panel-body">
                    <div className="tab-content tasi-tab">
                        <div id="settings" className="tab-pane active">
                            <div className="position-center">
                                <div className="prf-contacts sttng">
                                    <h2>CAMBIAR CONTRASEÑA</h2>
                                </div>
                                <form alt="form" className="form-horizontal" 
                                onSubmit={ handleChangePassword } 
                                >
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Contraseña Actual</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="password"
                                                placeholder="Contraseña actual"
                                                value={ passwordCurrent }
                                                onChange= { handlePasswordInputChange }
                                                id="passwordCurrent"
                                                name="passwordCurrent"
                                                className="form-control" 
                                                style={ inputStylePassword }
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Nueva Contraseña</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="password"
                                                id="passwordNew"
                                                name="passwordNew"
                                                placeholder="Contraseña nueva"
                                                className="form-control"
                                                value={ passwordNew }
                                                onChange= { handlePasswordInputChange }
                                                style={ inputStylePassword }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Repetir Contraseña</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="password"
                                                placeholder="Confirme contraseña"
                                                id="passwordAgain"
                                                name="passwordAgain"
                                                className="form-control"
                                                value={ passwordAgain }
                                                onChange= { handlePasswordInputChange }
                                                style={ inputStylePassword }
                                            />
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="form-group">
                                        <div className="col-lg-offset-2 col-lg-7">
                                            
                                            <button 
                                                className="btn btn-primary col-lg-5" 
                                                style={{ marginRight:5 }}
                                                type="submit"
                                                disabled={ uiDisabled }
                                            ><i 
                                            className={ uiLoadingSaveButton } 
                                            ></i>  Actualizar</button>
                                            <Link
                                                className="btn btn-warning col-lg-5"  
                                                style={{ marginRight:5 }} 
                                                type="button"
                                                to="/user/setting"
                                            ><i className="fa fa-times" ></i> Cancelar</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
