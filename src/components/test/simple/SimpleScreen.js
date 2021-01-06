import React, { useCallback,  useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';
import { useFetchQuestionSimple } from '../../../hooks/QuestionSimple/useFetchQuestionSimple';
import { QuestionBodyProfile } from './ProfileSimple/QuestionBodyProfile'
import useNearScreen from '../../../hooks/useNeerScreen';

export const SimpleScreen = () => {

    const externalRef = useRef();

    const { loading, QuestionsSimple, setSkip } = useFetchQuestionSimple();

    const { isNearScreen } = useNearScreen({ 
        externalRef: loading  ? null : externalRef,
        once: false
    });

    const debounceHandleNextPageSimple = useCallback(
        debounce(
            () => setSkip( preveSkip => preveSkip + 5 ), 1000
        ),[ setSkip ]);

    useEffect(() => {
        if( isNearScreen ) debounceHandleNextPageSimple();
    },[ isNearScreen, debounceHandleNextPageSimple ]);

    console.log( isNearScreen )

    return (
        <>
            <div className="animated fadeIn">
                <div className="profile-nav alt">
                        <section className="panel">
                            <header className="panel-heading">
                                ADMINISTRACION DE PREGUNTAS SIMPLES
                            </header>
                            <div>
                            {
                                ( QuestionsSimple !== [] ) &&
                                    <QuestionBodyProfile options={ QuestionsSimple } />
                            }
                            </div>
                        </section>
                    </div>
            </div>
            <div id="visor-simple" ref={ externalRef }></div>
        </>
    )
}
