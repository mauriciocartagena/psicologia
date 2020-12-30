import React from 'react'
import { useSelector } from 'react-redux';
import { FormQuestionShape } from './FormQuestionShape';

export const UpdatedScreen = () => {

    const { question, nombre, id_test, id_resp } = useSelector( state => state.questionShape.questionActive );

    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        MODIFICAR PRUEBAS FORMAS
                    </header>
                    {
                        ( question !== null )
                        ?
                            <FormQuestionShape  
                                id_pregunta = { question }
                                nombre = { nombre }
                                id_test = { id_test }
                                respuesta_correcta = { id_resp }

                            /> 
                        :
                        <div>No hay una pregunta para editar</div>
                    }
                </section>
            </div>
        </div>
    )
}
