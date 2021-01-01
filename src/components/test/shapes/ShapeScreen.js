import React from 'react';
import { useFetchQuestionShape } from '../../../hooks/QuestionShape/useFetchQuestionShape';
import { TestBodyProfile } from './ProfileShape/TestBodyProfile';
import './styles.css';

export const ShapeScreen = () => {

    const { data_questions_shape: testShape } = useFetchQuestionShape();

    return (
        <div className="animated fadeIn">
           <div className="profile-nav alt">
                <section className="panel">
                    <TestBodyProfile options={ testShape } />
                </section>
            </div>
        </div>
    )
}
