import React, { useEffect, useState } from 'react';
import { useFetchQuestionShape } from '../../../hooks/QuestionShape/useFetchQuestionShape';
import { TestBodyProfile } from './ProfileShape/TestBodyProfile';
import './styles.css';

export const ShapeScreen = () => {

    const  [ data, setData ] = useState({
        limit: 5,
        skip: 0
    });
    
    const { limit, skip } = data;

    const { shapeData: testShape } = useFetchQuestionShape( limit, skip );

    useEffect(() => {
        const onScroll = () => {
            const newShowFixed =  window.scrollY > 200 
            data !== newShowFixed && 
                setData({ limit: 1, skip: 1 });
        }
        document.addEventListener( 'scroll', onScroll );

        return(()=>{
            document.removeEventListener( 'scroll', onScroll )
        })
       
    }, [ data, limit, skip, testShape ]);

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
