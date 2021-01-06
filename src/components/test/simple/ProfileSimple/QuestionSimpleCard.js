import React from 'react'
import { PanelBody } from './PanelBody'

export const QuestionSimpleCard = ( { pregunta, updatedAt, createdAt, categorias, test_simples } ) => {

    return (
        <div className="animated fadeIn" >
            <div className="panel-body profile-information">
                <PanelBody
                    pregunta={ pregunta }
                    updatedAt={ updatedAt }
                    createdAt ={ createdAt }
                    categorias={ categorias }
                    test_simples={ test_simples }
               />
            </div>
            <hr/>
        </div >
    )
}
