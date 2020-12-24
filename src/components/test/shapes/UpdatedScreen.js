import React from 'react'
import { useSelector } from 'react-redux';
import { FormQuestionShape } from './FormQuestionShape';

export const UpdatedScreen = () => {

    const { questionActive } = useSelector( state => state.questionShape );

    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        MODIFICAR PRUEBAS FORMAS
                    </header>
                    {
                        ( questionActive !== null )
                        ?
                            <FormQuestionShape  
                                id_pregunta={ questionActive }
                            /> 
                        :
                        <div>No hay una pregunta para editar</div>
                    }
                </section>
            </div>
        </div>
    )
}
