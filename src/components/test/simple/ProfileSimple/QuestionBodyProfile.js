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
                    data.map( ( { pregunta, updatedAt, createdAt, categorias, test_simples }, key )=> (
                        <QuestionSimpleCard 
                            pregunta={ pregunta }
                            updatedAt={ updatedAt }
                            createdAt ={ createdAt }
                            categorias={ categorias }
                            test_simples={ test_simples }
                            key={ key } />
                    ))
            }
        </>
    )
}
