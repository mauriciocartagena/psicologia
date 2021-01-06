import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

export const PanelBody = ({ options }) => {


    //TODO Add id_pregunta for edit and delete
    const { pregunta, updatedAt, createdAt, categorias, test_simples } = options;

    const { nombre_categoria } = categorias;

    const { nombre_test } = test_simples;

    const handleActiveQuestionsSimple = () => {
        console.log("Sucess 1")
    }
    const handleDeleteQuestionSimple = () => {
        console.log("Sucess 2")
    }

    return (
        <>
            <div className="col-md-6">
                <div className="profile-desk">
                    <h1>Pregunta</h1>
                    <br />
                    { pregunta }
                    <span className="text-muted"></span>
                    <h1>Detalles</h1>
                    <br />
                    <span className="text-muted">
                        Creado : { moment(createdAt).format('LL, h:mm:ss a')}
                        <br />
                        Ultima Actualizacion : { moment(updatedAt).format('LL, h:mm:ss a')}
                        <br />
                    </span>
                    <br />
                    <button onClick={() => { handleActiveQuestionsSimple() }} className="btn btn-primary">Editar</button>
                    &nbsp; 
                    <button onClick={() => { handleDeleteQuestionSimple() }} className="btn btn-success">Eliminar</button>
                </div>
            </div>
            <div className="col-md-3">
                <div className="profile-statistics">
                    <h1>Categoria</h1>
                    <p>
                        { 
                           nombre_categoria
                        } 
                    </p>
                    <h1>Prueba Simple</h1>
                    <p>
                        { 
                            nombre_test
                        }
                    </p>
                </div>
            </div>
        </>
    )
}
