import React from 'react';
import { useSelector } from 'react-redux';
import { testShapeLoading } from '../../../actions/shape';
import { useFetchQuestionShape } from '../../../hooks/useFetchQuestionShape';
import { GetImageTest } from './GetImageTest';
import './styles.css';

export const ShapeScreen = () => {

    const { data_questions_shape: testShape } = useFetchQuestionShape();

    return (
        <div className="animated fadeIn">
           <div className="profile-nav alt">
                <section className="panel">
                    <GetImageTest options={ testShape } />
                </section>
            </div>
        </div>
    )
}
