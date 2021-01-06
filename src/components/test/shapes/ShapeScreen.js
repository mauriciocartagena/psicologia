import React, { useCallback,  useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';
import { useFetchQuestionShape } from '../../../hooks/QuestionShape/useFetchQuestionShape';
import useNearScreen from '../../../hooks/useNeerScreen';
import { TestBodyProfile } from './ProfileShape/TestBodyProfile';
import './styles.css';

export const ShapeScreen = () => {

    const externalRef = useRef();

    const { loading, questionsShape, setSkip } = useFetchQuestionShape();

    const { isNearScreen } = useNearScreen({ 
        externalRef: loading  ? null : externalRef,
        once: false
    });

    const debounceHandleNextPage = useCallback(debounce(
        () => setSkip( preveSkip => preveSkip + 1 ), 200
    ), [ setSkip ]);

    useEffect(() => {
        if( isNearScreen ) debounceHandleNextPage()
    },[ isNearScreen, debounceHandleNextPage ])

    return (
        <>
            <div className="animated fadeIn">
               <div className="profile-nav alt">
                    <section className="panel">
                        <header className="panel-heading">
                            ADMINISTRACION DE PREGUNTAS FORMAS
                        </header>
                        {
                            ( questionsShape !== [] ) &&
                                <TestBodyProfile options={ questionsShape } />
                        }
                    </section>
                </div>
            </div>
            <div id="visor" ref={ externalRef }></div>
        </>
    )
}
