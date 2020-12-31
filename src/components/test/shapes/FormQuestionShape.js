import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { shapeStartLoading } from '../../../actions/shape';
import { useFetchQuestionShapeOne } from '../../../hooks/QuestionShape/useFetchQuestionShapeOne';
import { useFetchDestructureValue } from '../../../hooks/QuestionShape/useFetchDestructureValue';
import { useFetchOptionsDestructure } from '../../../hooks/QuestionShape/useFetchOptionsDestructure';
import { Form } from './Form';

export const FormQuestionShape = ( { id_pregunta = '', nombre = '', id_test = '', respuesta_correcta = '' } ) => {

    const dispatch = useDispatch();

    const { data_questions_shape } = useFetchQuestionShapeOne( id_pregunta );

    const [ question, setQuestion ] = useState([]);

    const { pregunta, op1, op2, op3, op4, op5, op6 } = question;

    const [ questionsImage, setQuestionsImage ] = useState([]);

    const [ imageOptions, setImageOptions ] = useState([]);
    
    const DestructureValue = ( data_questions_shape ) => {
        
        setQuestion( data_questions_shape );

    }
    useEffect(()=>{

        DestructureValue( data_questions_shape );

    },[ data_questions_shape ]);
    
    const { image } = useFetchDestructureValue( pregunta );

    const { 
        option1,
        option2,
        option3,
        option4,
        option5,
        option6 
    } = useFetchOptionsDestructure( op1, op2, op3, op4, op5, op6 );

    useEffect(() => {

        dispatch( shapeStartLoading() );

    }, [ dispatch ]);

    useEffect(() => {

        if ( image !== '' || option1 !== '' || option2 !== '' || option3 !== '' || option4 !== '' || option5 !== '' || option6 !== '' ) {
            const options = [
                {
                    data_url : option1
                },
                {
                    data_url : option2
                },
                {
                    data_url : option3
                }, 
                {
                    data_url : option4
                }, 
                {
                    data_url : option5
                }, 
                {
                    data_url : option6  
                }
            ];
            setQuestionsImage([{ data_url: image }]);
            setImageOptions( options )
        }
    }, [ image, option1, option2, option3, option4, option5, option6 ]);

    return (
        <div className="panel-body row align-items-end">            
           <Form
            questionImage = { questionsImage }
            optionsImage = { imageOptions }
            nombre  = { nombre }
            id_test = { id_test }
            respuesta_correcta = { respuesta_correcta }
           />
        </div>
    )
}
