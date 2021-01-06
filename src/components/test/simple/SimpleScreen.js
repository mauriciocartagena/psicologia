import React, { useCallback,  useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';
import useNearScreen from '../../../hooks/useNeerScreen';
import { useFetchQuestionSImple } from '../../../hooks/QuestionSimple/useFetchQuestionSImple';
import { QuestionBodyProfile } from './ProfileSimple/QuestionBodyProfile'

export const SimpleScreen = () => {

    const externalRef = useRef();

    const { loading, QuestionsSimple, setSkip } = useFetchQuestionSImple();

    const { isNearScreen } = useNearScreen({ 
        externalRef: loading  ? null : externalRef,
        once: false
    });

    const debounceHandleNextPage = useCallback(debounce(
        () => setSkip( preveSkip => preveSkip + 1 ), 500
    ), []);

    useEffect(() => {
        if( isNearScreen ) debounceHandleNextPage()
    },[ isNearScreen, debounceHandleNextPage ]);

    return (
        <>
            <div className="animated fadeIn">
               <div className="profile-nav alt">
                   
                    <section className="panel">
                        <header className="panel-heading">
                            ADMINISTRACION DE PREGUNTAS SIMPLES
                        </header>
                        {
                            ( QuestionsSimple !== [] ) &&
                                <QuestionBodyProfile options={ QuestionsSimple } />
                        }
                    </section>
                </div>
            </div>
            <div id="visor" ref={ externalRef }></div>
        </>
    )
}
