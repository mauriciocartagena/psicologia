import React, { useCallback,  useEffect, useRef, useState } from 'react';
import debounce from 'just-debounce-it';
import { useFetchQuestionShape } from '../../../hooks/QuestionShape/useFetchQuestionShape';
import useNearScreen from '../../../hooks/useNeerScreen';
import { TestBodyProfile } from './ProfileShape/TestBodyProfile';
import './styles.css';

export const ShapeScreen = () => {

    const  [ data, setData ] = useState({
        limit: 1,
        skip: 0
    });

    const externalRef = useRef();

    const { limit, skip } = data;

    const { loading, questionsShape } = useFetchQuestionShape( limit, skip );

    const { isNearScreen } = useNearScreen({ 
        externalRef: loading  ? null : externalRef,
        once: false
    });

    const debounceHandleNextPage = useCallback(debounce(
        () => setData({ limit: limit + 1, skip: skip + 1 }), 1000
    ),[]);

    useEffect(() => {
        if( isNearScreen ) debounceHandleNextPage()
    },[ isNearScreen, debounceHandleNextPage ])



    return (
        <>
            <div className="animated fadeIn">
               <div className="profile-nav alt">
                    <section className="panel">
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
