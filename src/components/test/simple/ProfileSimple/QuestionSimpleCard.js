import React,{ useState, useEffect } from 'react'
import { PanelBody } from './PanelBody'

export const QuestionSimpleCard = ( { setDataQuestion, option = [], setFilter = [] } ) => {

    const [state, setState] = useState([]);

    const { id_pregunta, id_categoria, id_test, pregunta, updatedAt, createdAt, categorias, test_simples } = state;

    useEffect(() => {
        setState( option );
        return () => {
            setState([]);
        }
    }, [ option ]);


    return (
        <div className="animated fadeIn" >
            <div className="panel-body profile-information">
                <PanelBody
                    id_pregunta = { id_pregunta }
                    id_categoria = { id_categoria } 
                    id_test = { id_test }
                    pregunta={ pregunta }
                    updatedAt={ updatedAt }
                    createdAt ={ createdAt }
                    categorias={ categorias }
                    test_simples={ test_simples }
                    setFilter= { setFilter }
                    setDataQuestion={ setDataQuestion }
               />
            </div>
            <hr/>
        </div >
    )
}
