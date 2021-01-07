import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormQuestionSimple } from './FormQuestionSimple';

export const UpdatedScreen = () => {

    const { id_pregunta, pregunta, id_categoria, id_test } = useSelector( state => state.qSimple.questionActive );

    const history = useHistory();

    const ChangeLocation = ( e ) => {
        e.preventDefault();
        history.push('/test-simple');
    }

    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                        {
                            ( id_pregunta === undefined ) &&
                            <header className="panel-heading">
                                MODIFICAR PRUEBA SIMPLE
                            </header>
                        }
                        {
                        ( id_pregunta !== undefined )
                        ?
                            <FormQuestionSimple
                                id_pregunta={ id_pregunta }
                                pregunta={ pregunta }
                                id_categoria={ id_categoria }
                                id_test={ id_test }

                            /> 
                        :
                        <div className="panel-body row align-items-end">
                            <div className="col-sm-12"> 
                                <div className="text-center">
                                    <br/>
                                    <button onClick={ ChangeLocation } className="btn btn-primary">Debe de seleccionar una pregunta para editar</button>
                                </div>
                            </div>
                        </div>
                    }
                </section>
            </div>
        </div>
    )
}
