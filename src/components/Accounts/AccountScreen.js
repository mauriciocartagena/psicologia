import React from 'react';
import { useSelector } from 'react-redux';

export const AccountScreen = () => {

    const { persona } = useSelector(state => state.auth);

    const { nombre,
        primer_apellido,
        segundo_apellido,
        celular,
        imei,
        edad,
        dni,
        direccion,
        email } = persona;

    return (
        <div className="row">
            <div className="col-md-12">
                <section className="panel">
                    <div className="panel-body">
                        <div className="tab-content tasi-tab">
                            <div id="settings" className="tab-pane active">
                                <div className="position-center">
                                    <div className="prf-contacts sttng">
                                        <h2>  INFORMACIÓN PERSONAL</h2>
                                    </div>
                                    <form role="form" className="form-horizontal">
                                        <div className="form-group">
                                            <label className="col-lg-2 control-label">
                                                Foto principal
                                            </label>
                                            <div className="col-sm-7">
                                                <img
                                                    className="w150 img-thumbnail"
                                                    src="https://mauriciocartagena.github.io/my-perfil/static/media/photo.517c8325.png" />
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
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="form-group">
                                            <label className="col-lg-2 control-label">&nbsp;</label>
                                            <div className="col-sm-6">
                                                <button type="submit" className="btn btn-primary btn-round btn-block">
                                                    <i className="fa fa-save"></i>  Guardar
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
        </div>
    )
}
