import React, { useEffect, useState } from 'react'
import { QuestionSimpleCard } from './QuestionSimpleCard';

export const QuestionBodyProfile = ({ options }) => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        
        setData( options );
        
    }, [ options ]);


    return (
        <>
            { 
                ( data !== [] )
                &&
                    data.map( ( question, key )=> (
                        <QuestionSimpleCard options={ question } key={ key } />
                    ))
            }
        </>
    )
}
