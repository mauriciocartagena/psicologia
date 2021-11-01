import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormQuestionShape } from './FormQuestionShape';

export const UpdatedScreen = () => {

    const { question, nombre, id_test, id_resp } = useSelector(state => state.questionShape.questionActive);

    const history = useHistory();

    const ChangeLocation = (e) => {
        e.preventDefault();
        history.push('/test/register/shapes/screen');
    }

    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        MODIFICAR PRUEBAS FORMAS
                    </header>
                    {
                        (question !== null)
                            ?
                            <FormQuestionShape
                                id_pregunta={question}
                                nombre={nombre}
                                id_test={id_test}
                                respuesta_correcta={id_resp}

                            />
                            :
                            <div className="panel-body row align-items-end">
                                <div className="col-sm-12">
                                    <div className="text-center">
                                        <br />
                                        <button onClick={ChangeLocation} className="btn btn-primary">Debe de seleccionar una pregunta para editar</button>
                                    </div>
                                </div>
                            </div>
                    }
                </section>
            </div>
        </div>
    )
}
