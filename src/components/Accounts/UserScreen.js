import React, { useEffect } from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import 'moment/locale/es';
import { startUpdateUser } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { uiFalseDisabledButton, uiTrueDisabledButton } from '../../actions/ui';
// change Spanish

moment.locale('es');

export const UserScreen = () => {

    const dispatch = useDispatch();

    const { usuarios, persona_id } = useSelector(state => state.auth.persona);
    const { uiLoadingSaveButton, uiDisabled } = useSelector(state => state.ui);

    const [ formUserValues, handleUserInputChange ] = useForm( usuarios[0] );

    const { username, createdAt, updatedAt  } = formUserValues;

    const handleUpdateUser = ( e ) => {
        e.preventDefault();
        console.log( persona_id, username );
        dispatch( startUpdateUser( persona_id, username ) );
    }
    useEffect(() => {
        dispatch( uiFalseDisabledButton() );

        if( username.trim() === '' ){
            return dispatch( uiTrueDisabledButton() );
        }
        dispatch( uiFalseDisabledButton() );
        
    }, [ username, dispatch ]);

    return (
        <div className="col-md-12 animated fadeIn">
            <section className="panel">
                <div className="panel-body">
                    <div className="tab-content tasi-tab">
                        <div id="settings" className="tab-pane active">
                            <div className="position-center">
                                <div className="prf-contacts sttng">
                                    <h2>INFORMACIÓN CUENTA</h2>
                                </div>
                                <form alt="form" className="form-horizontal" 
                                onSubmit={ handleUpdateUser } 
                                >
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">User Name</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                placeholder="User Name"
                                                value={ username }
                                                onChange= { handleUserInputChange }
                                                id="username"
                                                name="username"
                                                className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Fecha de Creación</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                disabled
                                                name="create"
                                                className="form-control"
                                                value={ moment(createdAt).format('LL, h:mm:ss a') }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Ultima Actualización</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                disabled
                                                name="update"
                                                className="form-control"
                                                value={ moment(updatedAt).format('LL, h:mm:ss a') }
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
                                            ><i className={ uiLoadingSaveButton } ></i>  Actualizar</button>
                                            <Link
                                                className="btn btn-success col-lg-5"  
                                                style={{ marginRight:5 }} 
                                                type="button"
                                                to="/user/settingp"
                                            >
                                            <i className="fa fa-lock" ></i> Cambiar Contraseña</Link>
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