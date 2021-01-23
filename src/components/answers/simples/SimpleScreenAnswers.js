import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetchAnswerSimple } from '../../../hooks/Answers/Simple/useFetchAnswerSimple';
import { MapOfFormWinzard } from './MapOfFormWinzard';

export const SimpleScreenAnswers = () => {
 
    const history = useHistory();

    const { answersSimpleActive } = useSelector( state => state.answerSimple );

    const { data_answer } = useFetchAnswerSimple( answersSimpleActive );

    useEffect( () =>{

        if ( answersSimpleActive === null ) {
            history.push('/answers/selection');
        }

    },[ answersSimpleActive, history ]);

    return (
        <>
            {
                ( data_answer !== [])
                &&
                ( 
                    <div className="col-lg-12 animated fadeIn">
                        <section className="panel">
                            <header className="panel-heading">
                              PRUEBAS
                            </header>
                             <MapOfFormWinzard dataAnswers={ data_answer } />
                        </section>
                    </div>
                )
            }
        </>
    )
}
