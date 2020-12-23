import React from 'react'
import { useSelector } from 'react-redux';
import { useFetchQuestionShapeOne } from '../../../hooks/QuestionShape/useFetchQuestionShapeOne';

export const UpdatedScreen = () => {

    const { questionActive } = useSelector( state => state.questionShape );
    
    const  { data_questions_shape: question } = useFetchQuestionShapeOne( questionActive );

    console.log( question );

    return (
        <div>
            <h1>UpdateScreen</h1>
        </div>
    )
}
