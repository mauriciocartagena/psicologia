import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { questionClearShape, questionDeleteShape, questionSetShape } from '../../../../actions/questionShape';

moment.locale('es');

export const PanelBody = ({ id_pregunta = '', id_test = '', questions = [], nombre = [],  createdAt = '', updatedAt = '', respuesta_correcta = '', nombreTest = '', filterData, setFilterData }) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const handleActiveQuestions = ( id_pregunta, nombre, id_test, id_resp ) => {

        dispatch( questionClearShape() );
        dispatch( questionSetShape( id_pregunta, nombre, id_test, id_resp ));
        history.push('/test/update/shapes/screen');

    }
    const handleDeleteQuestion = ( id_pregunta ) => {
        dispatch( questionDeleteShape( id_pregunta ) );
        setFilterData( 
            filterData.filter(
            e =>( e.id_pregunta !== id_pregunta )
        ));
        
    }
    
    return (
        <>
            <div className="col-md-3">
                <div className="profile-pic text-center">
                    <img src={questions} alt="question" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="profile-desk">
                    <h1>Nombre</h1>
                    <br />
                    <span className="text-muted">{nombre}</span>
                    <h1>Detalles</h1>
                    <br />
                    <span className="text-muted">
                        Creado : {moment(createdAt).format('LL, h:mm:ss a')}
                        <br />
                        Ultima Actualizacion : {moment(updatedAt).format('LL, h:mm:ss a')}
                        <br />

                    </span>
                    <br />
                    <button onClick={() => { handleActiveQuestions( id_pregunta, nombre, id_test, respuesta_correcta ) }} className="btn btn-primary">Editar</button>
                    &nbsp; 
                    <button onClick={() => { handleDeleteQuestion( id_pregunta ) }} className="btn btn-success">Eliminar</button>
                </div>
            </div>
            <div className="col-md-3">
                <div className="profile-statistics">
                    <h1>Nombre</h1>
                    <p>{nombre} </p>
                    <h1>Respuesta Correcta</h1>
                    <p>Imagen : {respuesta_correcta}</p>
                    <h1>Nombre de Prueba </h1>
                    <p>{nombreTest}</p>
                </div>
            </div>
        </>
    )
}
