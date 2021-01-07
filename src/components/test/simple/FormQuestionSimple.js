import React from 'react'
import { FormUpdatedQuestion } from './FormUpdatedQuestion';


export const FormQuestionSimple = ({ id_pregunta = '', pregunta = '', id_categoria = '', id_test = ''  }) => {

    return (
       <FormUpdatedQuestion
            id_pregunta={ id_pregunta }
            pregunta={ pregunta }
            id_categoria={ id_categoria }
            id_test={ id_test }
       />
    )
}
