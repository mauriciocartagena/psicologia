import React, { useEffect, useState } from 'react'
import { QuestionSimpleCard } from './QuestionSimpleCard';

export const QuestionBodyProfile = ({ options }) => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        
        setData( options );

        return(()=>{
            setData([])
        });
        
    }, [ options ]);

    return (
        <>
            { 
                ( data !== [] )
                &&
                    data.map( ( option , key )=> (
                        <QuestionSimpleCard 
                            option={ option }
                            setFilter={ options }
                            setDataQuestion= { setData } 
                            key={ key } />
                    ))
            }
        </>
    )
}
