import React from 'react'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm'

export const UserScreen = () => {

    const { usuarios } = useSelector(state => state.auth.persona)

    const [ formUserValues, handleUserInputChange ] = useForm( usuarios[0] );

    const { username, createdAt, updatedAt  } = formUserValues;

    return (
        <div className="col-md-12">
            <section className="panel">
                <div className="panel-body">
                    <div className="tab-content tasi-tab">
                        <div id="settings" className="tab-pane active">
                            <div className="position-center">
                                <div className="prf-contacts sttng">
                                    <h2>  INFORMACIÓN CUENTA</h2>
                                </div>
                                <form role="form" className="form-horizontal" 
                                // onSubmit={ handleUpdate } 
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
                                                value={ createdAt }
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
                                                value={ updatedAt }
                                            />
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">&nbsp;</label>
                                        <div className="col-sm-6">
                                            <button type="submit" className="btn btn-primary btn-round btn-block" 
                                            // disabled={ buttonLogin } 
                                            
                                            >
                                                <i 
                                                // className={ uiLoadingSaveButton } 
                                                ></i>  Guardar
                                        </button>
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
