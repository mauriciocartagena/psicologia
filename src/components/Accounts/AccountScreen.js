import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startUpdateAccount } from '../../actions/auth';
import { uiFalseDisabledButton } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const AccountScreen = () => {

    const dispatch = useDispatch();

    const { persona } = useSelector(state => state.auth);
    
    const { uiLoadingSaveButton, uiDisabled } = useSelector(state => state.ui)

    const [ formAccountValues, handleAccountInputChange ] = useForm( persona );
    
    const { persona_id, nombre, primer_apellido, segundo_apellido, celular, imei, edad, dni, direccion, email } = formAccountValues;

    const handleUpdate = ( e ) => {
        e.preventDefault();

        dispatch( startUpdateAccount( persona_id, nombre, primer_apellido, segundo_apellido, celular, imei, edad, dni, direccion, email ) );

    }
    useEffect(() => {
        dispatch( uiFalseDisabledButton() );
        
    }, [ dispatch ])


    return (
        <div className="col-md-12 animated fadeIn">
            <section className="panel">
                <div className="panel-body">
                    <div className="tab-content tasi-tab">
                        <div id="settings" className="tab-pane active">
                            <div className="position-center">
                                <div className="prf-contacts sttng">
                                    <h2>  INFORMACIÓN PERSONAL</h2>
                                </div>
                                <form alt="formulario" className="form-horizontal" onSubmit={ handleUpdate } >
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">
                                            Foto principal
                                        </label>
                                        <div className="col-sm-6">
                                            <img
                                                className="w150 img-thumbnail"
                                                src="https://mauriciocartagena.github.io/my-perfil/static/media/photo.517c8325.png" 
                                                alt="perfil"
                                            />
                                            <br />
                                            <br />
                                            <input type="file" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Nombre</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                placeholder="nombre"
                                                value={ nombre }
                                                onChange= { handleAccountInputChange }
                                                id="nombre"
                                                name="nombre"
                                                className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Primer Apellido</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                placeholder="Primer Apellido"
                                                id="primer_apellido"
                                                name="primer_apellido"
                                                value={ primer_apellido }
                                                onChange= { handleAccountInputChange }
                                                className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Segundo Apellido</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                id="segundo_apellido"
                                                name="segundo_apellido"
                                                className="form-control"
                                                value={ segundo_apellido }
                                                onChange= { handleAccountInputChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Numero Celular</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                id="celular"
                                                name="celular"
                                                className="form-control"
                                                value={ celular }
                                                onChange= { handleAccountInputChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Imei</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                id="imei"
                                                name="imei"
                                                className="form-control"
                                                value={ imei }
                                                onChange= { handleAccountInputChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Dni</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                id="dni"
                                                name="dni"
                                                className="form-control"
                                                value={ dni }
                                                onChange= { handleAccountInputChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Edad</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                id="edad"
                                                name="edad"
                                                className="form-control"
                                                value={ edad }
                                                onChange= { handleAccountInputChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Email</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                value={ email }
                                                onChange= { handleAccountInputChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Dirección</label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                id="direccion"
                                                name="direccion"
                                                className="form-control"
                                                value={ direccion }
                                                onChange= { handleAccountInputChange }
                                            />
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">&nbsp;</label>
                                        <div className="col-sm-6">
                                            <button type="submit" className="btn btn-primary btn-round btn-block" disabled={ uiDisabled } >
                                                <i className={ uiLoadingSaveButton } ></i>  Guardar
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
